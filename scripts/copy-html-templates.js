const fs = require('fs');
const path = require('path');

// Ensure the out/templates directory exists
const outDir = path.join(process.cwd(), 'out');
const templatesDir = path.join(outDir, 'templates');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
if (!fs.existsSync(templatesDir)) {
  fs.mkdirSync(templatesDir, { recursive: true });
}

// Path to the source templates directory
const sourceTemplatesDir = path.join(process.cwd(), 'public/templates');

// Get list of HTML files in the source templates directory
let templateFiles = [];
try {
  templateFiles = fs.readdirSync(sourceTemplatesDir).filter(file => file.endsWith('.html'));
  console.log(`Found ${templateFiles.length} template files in public/templates`);
} catch (err) {
  console.error('Error reading templates directory:', err);
  process.exit(1);
}

// Copy each template file to the out/templates directory
templateFiles.forEach(file => {
  const sourcePath = path.join(sourceTemplatesDir, file);
  const destPath = path.join(templatesDir, file);
  
  try {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${file} to out/templates directory`);
  } catch (err) {
    console.error(`Error copying ${file}:`, err);
  }
});

console.log('HTML template copy process completed.');
