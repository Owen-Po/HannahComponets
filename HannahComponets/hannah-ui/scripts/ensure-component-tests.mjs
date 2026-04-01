import { readdirSync, statSync, existsSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const componentsDir = join(process.cwd(), 'src', 'components');
if (!existsSync(componentsDir)) {
  console.error('No components directory found at', componentsDir);
  process.exit(1);
}

const components = readdirSync(componentsDir).filter((item) => {
  const p = join(componentsDir, item);
  return statSync(p).isDirectory();
});

let created = 0;
for (const component of components) {
  const componentDir = join(componentsDir, component);
  const testFile = join(componentDir, `${component}.test.tsx`);
  if (existsSync(testFile)) continue;

  const content = `import { describe, it, expect } from 'vitest';\n` +
    `import * as ComponentModule from './${component}';\n\n` +
    `describe('${component}', () => {\n` +
    `  it('exports component or utilities', () => {\n` +
    `    expect(ComponentModule).toBeTruthy();\n` +
    `    expect(Object.keys(ComponentModule).length).toBeGreaterThan(0);\n` +
    `  });\n` +
    `});\n`;

  writeFileSync(testFile, content, 'utf8');
  created += 1;
  process.stdout.write(`Created missing test: ${component}/${component}.test.tsx\n`);
}

console.log(`\nComponent test bootstrap complete. Missing tests generated: ${created}.`);
process.exit(0);
