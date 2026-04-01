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
  .map(dirent => dirent.name)
  .filter(name => name !== 'core'); // Excluir core

console.log(`🚀 Publicando ${componentDirs.length} componentes en npm...\n`);

let successCount = 0;
let failCount = 0;

for (const dirName of componentDirs) {
  const packagePath = join(packagesDir, dirName);

  try {
    console.log(` Publicando @hannah-ui/${dirName}...`);

    // Cambiar al directorio del paquete y publicar
    execSync(`cd ${packagePath} && npm publish --access public`, {
      stdio: 'inherit',
      cwd: packagePath
    });

    console.log(`✅ @hannah-ui/${dirName} publicado exitosamente\n`);
    successCount++;
  } catch (error) {
    console.error(`❌ Error publicando @hannah-ui/${dirName}:`, error.message);
    failCount++;
  }
}

console.log(`\nResumen:`);
console.log(`✅ ${successCount} componentes publicados exitosamente`);
console.log(`❌ ${failCount} componentes fallaron`);

if (failCount === 0) {
  console.log(`\n¡Todos los componentes publicados!`);
  console.log(`Ahora los usuarios pueden instalar solo los componentes que necesitan:`);
  console.log(`npm install @hannah-ui/button @hannah-ui/input`);
}