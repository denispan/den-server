const fs = require('fs').promises;
const path = require('path');

async function renderTemplate(templateName, variables) {
    const templatePath = path.join(__dirname, '..', 'views', templateName);
    let content = await fs.readFile(templatePath, 'utf-8');
    
    // Заменяем все переменные в шаблоне
    Object.entries(variables).forEach(([key, value]) => {
        content = content.replace(`\${${key}}`, value);
    });
    
    return content;
}

module.exports = { renderTemplate };
