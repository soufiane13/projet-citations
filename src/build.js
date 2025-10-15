const fs = require('fs');
const path = require('path');
const citationAleatoire = require('./src/app');

const citation = citationAleatoire();
console.log(`Citation générée : "${citation}"`);

const templatePath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(templatePath, 'utf8');

htmlContent = htmlContent.replace('__CITATION__', citation);

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)){
    fs.mkdirSync(distDir);
}


const outputPath = path.join(distDir, 'index.html');
fs.writeFileSync(outputPath, htmlContent);

console.log(`Page générée avec succès dans ${outputPath}`);
