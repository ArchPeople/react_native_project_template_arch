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
  const packageName = await ask('What is the package name? ');

  /// 1. Update android package and app name
  const gradlePath = 'android/app/build.gradle';

  let gradleContent = fs.readFileSync(gradlePath, 'utf8');

  const namespaceMatch = gradleContent.match(/namespace\s+"([^"]+)"/);
  const oldPackageName = namespaceMatch ? namespaceMatch[1] : null;

  if (!oldPackageName) {
    console.log('Could not find namespace!');
    rl.close();
    return;
  }

  gradleContent = gradleContent.replaceAll(oldPackageName, packageName);

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

  console.log('\n✅ We are almost complete!');
  console.log('We need your help to manually replace');
  console.log('\nSearch for this:', oldPackageName);
  console.log('and replace to:', packageName);
  console.log('\nDo yarn run clean, then you can run your app!');

  rl.close();
}

main();
