const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/elementTest/runtime.es2015.js',
    './dist/elementTest/polyfills.es2015.js',
    './dist/elementTest/scripts.es2015.js',
    './dist/elementTest/main.es2015.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/elements.js');
  await fs.copyFile('./dist/elementTest/styles.css', 'elements/styles.css')
  await fs.copy('./dist/elementTest/assets/', 'elements/assets/' )

})()