const fs = require('fs');
const path = require('path');

async function main() {
  const archIcon = `
         ____________
      /                \\
     /    __________    \\
    /    /          \\    \\
   |    |            |    |
   |    |            |    |
   |    |            |    |
   |    |            |    |
   |    |            |    |
   |    |            |    |
   |    |_______     |    |
   |            |    |    |
   |____________|    |____|
`;
  const archText = `
     _      ____    ____  _   _ 
    / \\    |  _ \\  / ___|| | | |
   / _ \\   | |_) || |    | |_| |
  / ___ \\  |  _ < | |___ |  _  |
 /_/   \\_\\ |_| \\_\\ \\____||_| |_|
`;

  console.log(archIcon);
  console.log(archText);
  await new Promise(resolve => setTimeout(resolve, 1000));
  // 1. Setup Paths
  const rootDir = path.join(__dirname, '..');
  const outFile = path.join(rootDir, 'src/core/config/env.ts');
  const envFile = path.join(rootDir, '.env');

  try {
    // 2. Read the .env file
    if (!fs.existsSync(envFile)) {
      console.error('❌ .env file not found');
      process.exit(1);
    }

    const envContent = fs.readFileSync(envFile, 'utf8');
    const lines = envContent.split(/\r?\n/);

    // 3. Start the output string
    let output = 'export const env = {\n';

    lines.forEach(line => {
      // Clean carriage returns and trim whitespace
      const trimmedLine = line.trim();

      // Skip empty lines or comments (starting with #)
      if (!trimmedLine || trimmedLine.startsWith('#')) {
        return;
      }

      // Split by the first '=' found
      const firstEquals = trimmedLine.indexOf('=');
      if (firstEquals === -1) return;

      let key = trimmedLine.substring(0, firstEquals).trim();
      let value = trimmedLine.substring(firstEquals + 1).trim();

      // Lowercase the key as per your .sh script
      const lowerKey = key.toLowerCase();

      // Add to the output string (handles basic value quoting)
      output += `  ${lowerKey}: "${value}",\n`;
    });

    output += '};';

    // 4. Ensure directory exists and write file
    const outDir = path.dirname(outFile);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    fs.writeFileSync(outFile, output);

    console.log('✅ Environment generated successfully');
  } catch (error) {
    console.error('❌ Error generating environment:', error.message);
  }
}

main();
