#!/usr/bin/env node

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packagesDir = join(__dirname, '../packages');
const mainPackageJsonPath = join(__dirname, '../package.json');

// Leer todos los directorios de packages
const componentDirs = readdirSync(packagesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(name => name !== 'core'); // Excluir core ya que es dependencia interna

// Leer el package.json principal
const mainPackageJson = JSON.parse(readFileSync(mainPackageJsonPath, 'utf8'));

// Función para convertir nombre de directorio a nombre de componente
function dirToComponentName(dirName) {
  // Convertir kebab-case a PascalCase
  return dirName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Crear las nuevas exportaciones
const newExports = {
  ".": {
    "types": "./dist/main.d.ts",
    "import": "./dist/hannah-ui.js",
    "require": "./dist/hannah-ui.umd.cjs"
  },
  "./style.css": "./dist/hannah-ui.css"
};

// Agregar exportaciones para cada componente
componentDirs.forEach(dirName => {
  const componentName = dirToComponentName(dirName);
  const packagePath = `./packages/${dirName}/dist/hannah-ui-${dirName}.js`;
  const typesPath = `./packages/${dirName}/dist/src/index.d.ts`;
  const umdPath = `./packages/${dirName}/dist/hannah-ui-${dirName}.umd.cjs`;

  newExports[`./${componentName}`] = {
    "types": typesPath,
    "import": packagePath,
    "require": umdPath
  };
});

// Actualizar el package.json
mainPackageJson.exports = newExports;

// Escribir el archivo actualizado
writeFileSync(mainPackageJsonPath, JSON.stringify(mainPackageJson, null, 2));

console.log(`✅ Actualizado package.json con ${componentDirs.length} componentes individuales`);
console.log('Ahora cada componente se importa desde su propio paquete en lugar del bundle único.');