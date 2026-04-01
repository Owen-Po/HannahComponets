#!/usr/bin/env node

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packagesDir = join(__dirname, '../packages');

// Leer el contenido del core
const coreIndexPath = join(packagesDir, 'core/src/index.ts');
const coreIndexContent = readFileSync(coreIndexPath, 'utf8');

// Leer todos los directorios de packages
const componentDirs = readdirSync(packagesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(name => name !== 'core'); // Excluir core

console.log(`🔧 Haciendo ${componentDirs.length} componentes independientes...\n`);

let updatedCount = 0;

for (const dirName of componentDirs) {
  const packagePath = join(packagesDir, dirName);
  const packageJsonPath = join(packagePath, 'package.json');
  const componentIndexPath = join(packagePath, 'src/index.ts');

  try {
    // Leer el package.json del componente
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

    // Si depende de @hannah-ui/core, remover esa dependencia
    if (packageJson.dependencies && packageJson.dependencies['@hannah-ui/core']) {
      delete packageJson.dependencies['@hannah-ui/core'];

      // Agregar las dependencias del core directamente
      if (!packageJson.dependencies) packageJson.dependencies = {};
      packageJson.dependencies['clsx'] = '^2.1.1';
      packageJson.dependencies['tailwind-merge'] = '^3.5.0';

      // Escribir el package.json actualizado
      writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.log(`✅ Actualizado ${dirName} - removida dependencia de @hannah-ui/core`);
      updatedCount++;
    }

    // Crear el archivo utils/cn.ts si no existe
    const utilsDir = join(packagePath, 'src/utils');
    const cnPath = join(utilsDir, 'cn.ts');

    // Crear directorio utils si no existe
    try {
      readdirSync(utilsDir);
    } catch {
      // El directorio no existe, pero writeFileSync lo creará
    }

    // Copiar la utilidad cn del core
    const coreCnPath = join(packagesDir, 'core/src/utils/cn.ts');
    const cnContent = readFileSync(coreCnPath, 'utf8');
    writeFileSync(cnPath, cnContent);
    console.log(`✅ Creado utils/cn.ts en ${dirName}`);
    const componentSrcDir = join(packagePath, 'src');
    function updateImportsInDir(dir) {
      const items = readdirSync(dir, { withFileTypes: true });
      for (const item of items) {
        const itemPath = join(dir, item.name);
        if (item.isDirectory()) {
          updateImportsInDir(itemPath);
        } else if (item.isFile() && item.name.endsWith('.tsx')) {
          let content = readFileSync(itemPath, 'utf8');
          if (content.includes('@hannah-ui/core')) {
            content = content.replace(
              /import\s*{\s*cn\s*}\s*from\s*['"]@hannah-ui\/core['"];?\s*/g,
              `import { cn } from './utils/cn';\n`
            );
            writeFileSync(itemPath, content);
            console.log(`✅ Actualizado ${itemPath} - importación cambiada`);
          }
        }
      }
    }
    updateImportsInDir(componentSrcDir);

    // Actualizar vite.config.ts para no externalizar @hannah-ui/core
    const viteConfigPath = join(packagePath, 'vite.config.ts');
    if (readFileSync(viteConfigPath, 'utf8').includes('@hannah-ui/core')) {
      let viteContent = readFileSync(viteConfigPath, 'utf8');
      viteContent = viteContent.replace(/'@hannah-ui\/core',\s*/g, '');
      viteContent = viteContent.replace(/'@hannah-ui\/core':\s*'HannahUICore',\s*/g, '');
      writeFileSync(viteConfigPath, viteContent);
      console.log(`✅ Actualizado vite.config.ts de ${dirName} - removida externalización de @hannah-ui/core`);
    }

  } catch (error) {
    console.error(`❌ Error procesando ${dirName}:`, error.message);
  }
}

console.log(`\nResumen:`);
console.log(`✅ ${updatedCount} componentes hechos independientes`);

if (updatedCount > 0) {
  console.log(`\n ¡Componentes independientes!`);
  console.log(`Ahora puedes instalar componentes individuales sin el paquete principal:`);
  console.log(`npm install @hannah-ui/button  # Solo instala Button`);
}