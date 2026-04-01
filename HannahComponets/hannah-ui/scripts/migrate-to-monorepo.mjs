import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const componentsDir = path.join(rootDir, 'src', 'components');
const packagesDir = path.join(rootDir, 'packages');

if (!fs.existsSync(packagesDir)) {
  fs.mkdirSync(packagesDir);
}

const components = fs.readdirSync(componentsDir).filter(f => 
  fs.statSync(path.join(componentsDir, f)).isDirectory()
);

// We need a list of component names to replace inter-component imports
const componentNamesMap = new Map();
components.forEach(comp => {
  componentNamesMap.set(comp, `@hannah-ui/${comp.toLowerCase()}`);
});
// Add button since it's already moved
componentNamesMap.set('Button', '@hannah-ui/button');

// For each component
for (const comp of components) {
  const compDirLower = comp.toLowerCase();
  const pkgDir = path.join(packagesDir, compDirLower);
  
  if (!fs.existsSync(pkgDir)) {
    fs.mkdirSync(pkgDir);
  }
  
  const srcDest = path.join(pkgDir, 'src');
  if (!fs.existsSync(srcDest)) {
    fs.mkdirSync(srcDest);
  }
  
  const oldCompDir = path.join(componentsDir, comp);
  
  // Move files
  const files = fs.readdirSync(oldCompDir);
  for (const f of files) {
    fs.renameSync(path.join(oldCompDir, f), path.join(srcDest, f));
  }
  
  // Delete old dir
  fs.rmdirSync(oldCompDir);
  
  // Write package.json
  const packageJson = {
    name: `@hannah-ui/${compDirLower}`,
    version: "0.0.1",
    type: "module",
    main: `./dist/hannah-ui-${compDirLower}.umd.cjs`,
    module: `./dist/hannah-ui-${compDirLower}.js`,
    types: "./dist/src/index.d.ts",
    exports: {
      ".": {
        types: "./dist/src/index.d.ts",
        import: `./dist/hannah-ui-${compDirLower}.js`,
        require: `./dist/hannah-ui-${compDirLower}.umd.cjs`
      }
    },
    scripts: {
      build: "vite build"
    },
    peerDependencies: {
      react: ">=18.0.0",
      "react-dom": ">=18.0.0",
      "lucide-react": ">=0.400.0"
    },
    dependencies: {
      "@hannah-ui/core": "*"
    }
  };
  fs.writeFileSync(path.join(pkgDir, 'package.json'), JSON.stringify(packageJson, null, 2));
  
  // Write vite.config.ts
  const viteConfig = `import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'HannahUI${comp}',
      fileName: 'hannah-ui-${compDirLower}',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'lucide-react', '@hannah-ui/core', '@dnd-kit/core', '@tanstack/react-table', 'zustand'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'lucide-react': 'LucideReact',
          '@hannah-ui/core': 'HannahUICore',
        },
      },
    },
  },
});
`;
  fs.writeFileSync(path.join(pkgDir, 'vite.config.ts'), viteConfig);
}

// 2nd Pass: Fix imports
// Find all TS/TSX files in all packages
function fixImports(dir, compName) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const itemPath = path.join(dir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      fixImports(itemPath, compName);
    } else if (itemPath.endsWith('.ts') || itemPath.endsWith('.tsx')) {
      let content = fs.readFileSync(itemPath, 'utf8');
      let changed = false;
      
      // Fix relative cn imports: import { cn } from "../../utils/cn" -> import { cn } from "@hannah-ui/core"
      if (/import\s*\{\s*[^}]*cn[^}]*\}\s*from\s*['"](\.\.\/)+utils\/cn['"]/.test(content)) {
        content = content.replace(/import\s*(\{[\s\w,]*cn[\s\w,]*\})\s*from\s*['"](\.\.\/)+utils\/cn['"]/g, 'import $1 from "@hannah-ui/core"');
        changed = true;
      }
      
      // Fix relative inter-components imports: import { Button } from "../Button"
      // We look for any relative import that leaves current component dir i.e. "../OtherComp"
      const interCompRegex = /from\s*['"]\.\.\/([A-Za-z0-9_]+)\/?.*?['"]/g;
      const matches = [...content.matchAll(interCompRegex)];
      
      const depsToAdd = new Set();
      for (const match of matches) {
        const otherComp = match[1];
        if (componentNamesMap.has(otherComp)) {
          const pkgName = componentNamesMap.get(otherComp);
          // Replace exactly that import
          const exactImportRegex = new RegExp(`from\\s*['"]\\.\\.\\/${otherComp}\\/?.*?['"]`, 'g');
          content = content.replace(exactImportRegex, `from "${pkgName}"`);
          depsToAdd.add(pkgName);
          changed = true;
        }
      }
      
      if (changed) {
        fs.writeFileSync(itemPath, content);
      }
      
      if (depsToAdd.size > 0) {
        // Add to package.json
        const pkgJsonPath = path.join(packagesDir, compName.toLowerCase(), 'package.json');
        if (fs.existsSync(pkgJsonPath)) {
          const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
          depsToAdd.forEach(dep => {
            pkg.dependencies[dep] = "*";
          });
          fs.writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2));
        }
      }
    }
  }
}

for (const comp of Array.from(componentNamesMap.keys())) {
  const pkgSrcDir = path.join(packagesDir, comp.toLowerCase(), 'src');
  if (fs.existsSync(pkgSrcDir)) {
    fixImports(pkgSrcDir, comp);
  }
}

console.log("Migration script complete");
