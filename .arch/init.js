const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise(resolve => {
    rl.question(question, resolve);
  });
}

function copyFolderSync(src, dest) {
  // create destination folder
  fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // recurse for folders
      copyFolderSync(srcPath, destPath);
    } else {
      // copy file
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function main() {
  const archIcon = `
                ▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒
            ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
          ▓▓▓▓▓▓▒▒░░░░░░░░░░▒▒▓▓▓▓▓▓
         ▓▓▓▓▒░░░          ░░░▒▓▓▓▓▓▓
        ▓▓▓▓▓▒░░              ░░▒▓▓▓▓▓
        ▓▓▓▓▓▒░░              ░░▒▓▓▓▓▓
        ▓▓▓▓▓▒░░              ░░▒▓▓▓▓▓
        ▓▓▓▓▓▒░░              ░░▒▓▓▓▓▓
        ▓▓▓▓▓▒░░              ░░▒▓▓▓▓▓
        ▓▓▓▓▓▒░░              ░░▒▓▓▓▓▓
        ▓▓▓▓▓▒░░              ░░▒▓▓▓▓▓
        ▓▓▓▓▓▒░░              ░░▒▓▓▓▓▓
        ▓▓▓▓▓▒░░              ░░▒▓▓▓▓▓
        ▓▓▓▓▓▒░░              ░░▒▓▓▓▓▓
        ▓▓▓▓▓▒░░              ░░▒▓▓▓▓▓
        ▓▓▓▓▓▓▓▓▓▓▓           ░░▒▓▓▓▓▓
        ▓▓▓▓▓▓▓▓▓▓▓           ░░▒▓▓▓▓▓



   ▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓  ▓▓     ▓▓
  ▓▓     ▓▓  ▓▓      ▓▓  ▓▓         ▓▓     ▓▓
  ▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓  ▓▓         ▓▓▓▓▓▓▓▓▓
  ▓▓     ▓▓  ▓▓    ▓▓    ▓▓         ▓▓     ▓▓
  ▓▓     ▓▓  ▓▓      ▓▓  ▓▓▓▓▓▓▓▓▓  ▓▓     ▓▓
`;

  console.log(archIcon);
  await new Promise(resolve => setTimeout(resolve, 1000));
  const appName = await ask('\nWhat is the app name? ');
  const packageName = await ask('What is the package name? ');
  const repositoryName = await ask('What is the repository name? ');

  /// 1. Update android package and app name
  const gradlePath = 'android/app/build.gradle';

  let gradleContent = fs.readFileSync(gradlePath, 'utf8');

  const namespaceMatch = gradleContent.match(/namespace\s+"([^"]+)"/);
  const productionBlock = gradleContent.match(/production\s*\{[\s\S]*?\}/);
  const appNameMatch = productionBlock?.[0].match(/app_name"\s*,\s*"([^"]+)"/);

  const oldAppName = appNameMatch?.[1];
  const oldPackageName = namespaceMatch ? namespaceMatch[1] : null;

  if (!oldPackageName) {
    console.log('Could not find namespace!');
    rl.close();
    return;
  }

  gradleContent = gradleContent.replaceAll(oldPackageName, packageName);
  gradleContent = gradleContent.replaceAll(oldAppName, appName);

  fs.writeFileSync(gradlePath, gradleContent);

  /// 2. Change Android path

  fs.mkdirSync(`android/app/src/main/java/${packageName.replace(/\./g, '/')}`, {
    recursive: true,
  });

  copyFolderSync(
    `android/app/src/main/java/${oldPackageName.replace(/\./g, '/')}`,
    `android/app/src/main/java/${packageName.replace(/\./g, '/')}`,
  );

  fs.rmSync(`android/app/src/main/java/${oldPackageName.replace(/\./g, '/')}`, {
    recursive: true,
    force: true,
  });

  /// 3. Change iOS path
  fs.renameSync(`ios/${oldPackageName.slice(4)}`, `ios/${repositoryName}`);
  fs.renameSync(
    `ios/${oldPackageName.slice(4)}.xcworkspace`,
    `ios/${repositoryName}.xcworkspace`,
  );
  fs.renameSync(
    `ios/${oldPackageName.slice(4)}.xcodeproj`,
    `ios/${repositoryName}.xcodeproj`,
  );

  /// 4. Add .env file
  fs.writeFileSync('.env', 'FLAVOR=development\n');

  console.log('\n✅ We are almost complete!');
  console.log('We need your help to manually replace');
  console.log('\nSearch for this:', oldPackageName);
  console.log('and replace to:', packageName);
  console.log('\nSearch for this:', oldPackageName.slice(4));
  console.log('and replace to:', repositoryName);
  console.log('\nPlease run this manually before running:');
  console.log('yarn run clean && yarn run arch:generate-env');
  console.log('\nYour app is now ready 🚀, Happy coding ~');

  rl.close();
}

main();
