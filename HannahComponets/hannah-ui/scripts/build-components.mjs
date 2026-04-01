#!/usr/bin/env node

import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packagesDir = join(__dirname, '../packages');

// Leer todos los directorios de packages
const componentDirs = readdirSync(packagesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`🔨 Construyendo ${componentDirs.length} componentes...\n`);

let successCount = 0;
let failCount = 0;

for (const dirName of componentDirs) {
  const packagePath = join(packagesDir, dirName);

  try {
    console.log(` Construyendo @hannah-ui/${dirName}...`);

    // Cambiar al directorio del paquete y construir
    execSync(`cd ${packagePath} && npm run build`, {
      stdio: 'inherit',
      cwd: packagePath
    });

    console.log(` @hannah-ui/${dirName} construido exitosamente\n`);
    successCount++;
  } catch (error) {
    console.error(` Error construyendo @hannah-ui/${dirName}:`, error.message);
    failCount++;
  }
}

console.log(`\nResumen:`);
console.log(`${successCount} componentes construidos exitosamente`);
console.log(`${failCount} componentes fallaron`);

if (failCount === 0) {
  console.log(`\n🎉 ¡Todos los componentes construidos!`);
  console.log(`Ahora puedes ejecutar: npm run publish:components`);
}