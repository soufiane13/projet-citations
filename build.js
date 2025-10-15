const fs = require('fs');
const path = require('path');
const citationAleatoire = require('./src/app.js');

const distDir = path.join(__dirname, 'dist');
const templatePath = path.join(__dirname, 'src', 'index.html');
const outputPath = path.join(distDir, 'index.html');

try {
    // 1. S'assurer que le dossier de destination (dist) existe
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir);
    }

    // 2. Lire le modèle HTML
    const template = fs.readFileSync(templatePath, 'utf8');

    // 3. Remplacer le marqueur par une citation
    const finalHtml = template.replace('__CITATION__', citationAleatoire());

    // 4. Écrire le fichier final dans le dossier dist
    fs.writeFileSync(outputPath, finalHtml);

    console.log('Page statique générée avec succès dans dist/index.html');
} catch (error) {
    console.error('Erreur lors de la génération de la page statique :', error);
    process.exit(1);
}
