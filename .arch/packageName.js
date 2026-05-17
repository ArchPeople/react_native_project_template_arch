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
  const packageName = await ask('What is the package name? ');

  /// 1. Update android package and app name
  const gradlePath = 'android/app/build.gradle';
  const mainActivityPath =
    'android/app/src/main/java/com/react_native_project_template_arch/MainActivity.kt';
  const mainApplicationPath =
    'android/app/src/main/java/com/react_native_project_template_arch/MainApplication.kt';
  const projectiOSPath =
    'ios/react_native_project_template_arch.xcodeproj/project.pbxproj';

  let gradleContent = fs.readFileSync(gradlePath, 'utf8');
  let mainActivityContent = fs.readFileSync(mainActivityPath, 'utf8');
  let mainApplicationContent = fs.readFileSync(mainApplicationPath, 'utf8');
  let projectiOSContent = fs.readFileSync(projectiOSPath, 'utf8');

  const namespaceMatch = gradleContent.match(/namespace\s+"([^"]+)"/);

  const oldPackageName = namespaceMatch ? namespaceMatch[1] : null;

  if (!oldPackageName) {
    console.log('Could not find namespace!');
    rl.close();
    return;
  }

  gradleContent = gradleContent.replaceAll(oldPackageName, packageName);
  mainActivityContent = mainActivityContent.replaceAll(
    oldPackageName,
    packageName,
  );
  mainApplicationContent = mainApplicationContent.replaceAll(
    oldPackageName,
    packageName,
  );
  projectiOSContent = projectiOSContent.replaceAll(oldPackageName, packageName);

  fs.writeFileSync(gradlePath, gradleContent);
  fs.writeFileSync(mainActivityPath, mainActivityContent);
  fs.writeFileSync(mainApplicationPath, mainApplicationContent);
  fs.writeFileSync(projectiOSPath, projectiOSContent);

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
  console.log('\n✅ Package name succesfully changed to', packageName);

  rl.close();
}

main();
