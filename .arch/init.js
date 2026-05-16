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

  /// Add .env file
  fs.writeFileSync('.env', 'FLAVOR=development\n');

  /// 1. Update android package and app name
  const gradlePath = 'android/app/build.gradle';

  const stringsXmlPath = 'android/app/src/main/res/values/strings.xml';
  const mainActivityPath =
    'android/app/src/main/java/com/react_native_project_template_arch/MainActivity.kt';
  const mainApplicationPath =
    'android/app/src/main/java/com/react_native_project_template_arch/MainApplication.kt';
  const projectiOSPath =
    'ios/react_native_project_template_arch.xcodeproj/project.pbxproj';
  const developmentSchemePath =
    'ios/react_native_project_template_arch.xcodeproj/xcshareddata/xcschemes/development.xcscheme';
  const stagingSchemePath =
    'ios/react_native_project_template_arch.xcodeproj/xcshareddata/xcschemes/staging.xcscheme';
  const productionSchemePath =
    'ios/react_native_project_template_arch.xcodeproj/xcshareddata/xcschemes/production.xcscheme';

  const appJsonPath = 'app.json';
  const packageJsonPath = 'package.json';
  const settingsGradlePath = 'android/settings.gradle';
  const podFilePath = 'ios/Podfile';
  const appDelegatePath =
    'ios/react_native_project_template_arch/AppDelegate.swift';
  const launchScreenPath =
    'ios/react_native_project_template_arch/LaunchScreen.storyboard';
  const contentsPath =
    'ios/react_native_project_template_arch.xcworkspace/contents.xcworkspacedata';

  let gradleContent = fs.readFileSync(gradlePath, 'utf8');
  let stringsXmlContent = fs.readFileSync(stringsXmlPath, 'utf8');
  let mainActivityContent = fs.readFileSync(mainActivityPath, 'utf8');
  let mainApplicationContent = fs.readFileSync(mainApplicationPath, 'utf8');
  let projectiOSContent = fs.readFileSync(projectiOSPath, 'utf8');
  let developmentSchemeContent = fs.readFileSync(developmentSchemePath, 'utf8');
  let stagingSchemeContent = fs.readFileSync(stagingSchemePath, 'utf8');
  let productionSchemeContent = fs.readFileSync(productionSchemePath, 'utf8');

  let appJsonContent = fs.readFileSync(appJsonPath, 'utf8');
  let packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  let settingsGradleContent = fs.readFileSync(settingsGradlePath, 'utf8');
  let podFileContent = fs.readFileSync(podFilePath, 'utf8');
  let appDelegateContent = fs.readFileSync(appDelegatePath, 'utf8');
  let launchScreenContent = fs.readFileSync(launchScreenPath, 'utf8');
  let contentsContent = fs.readFileSync(contentsPath, 'utf8');

  const namespaceMatch = gradleContent.match(/namespace\s+"([^"]+)"/);

  const productionBlock = gradleContent.match(/production\s*\{[\s\S]*?\}/);
  const appNameMatch = productionBlock?.[0].match(/app_name"\s*,\s*"([^"]+)"/);

  const repoNameMatch = packageJsonContent.match(/"name"\s*:\s*"([^"]+)"/);

  const oldAppName = appNameMatch?.[1];
  const oldPackageName = namespaceMatch ? namespaceMatch[1] : null;
  const oldRepoName = repoNameMatch ? repoNameMatch[1] : null;

  if (!oldPackageName) {
    console.log('Could not find namespace!');
    rl.close();
    return;
  }

  gradleContent = gradleContent.replaceAll(oldPackageName, packageName);
  gradleContent = gradleContent.replaceAll(oldAppName, appName);

  stringsXmlContent = stringsXmlContent.replaceAll(oldAppName, appName);
  mainActivityContent = mainActivityContent
    .replaceAll(oldPackageName, packageName)
    .replaceAll(oldRepoName, repositoryName);
  mainApplicationContent = mainApplicationContent.replaceAll(
    oldPackageName,
    packageName,
  );
  projectiOSContent = projectiOSContent
    .replaceAll(oldAppName, appName)
    .replaceAll(oldPackageName, packageName)
    .replaceAll(oldRepoName, repositoryName);
  developmentSchemeContent = developmentSchemeContent
    .replaceAll(oldAppName, appName)
    .replaceAll(oldRepoName, repositoryName);
  stagingSchemeContent = stagingSchemeContent
    .replaceAll(oldAppName, appName)
    .replaceAll(oldRepoName, repositoryName);
  productionSchemeContent = productionSchemeContent
    .replaceAll(oldAppName, appName)
    .replaceAll(oldRepoName, repositoryName);
  appJsonContent = appJsonContent.replaceAll(oldRepoName, repositoryName);
  packageJsonContent = packageJsonContent.replaceAll(
    oldRepoName,
    repositoryName,
  );
  settingsGradleContent = settingsGradleContent.replaceAll(
    oldRepoName,
    repositoryName,
  );
  podFileContent = podFileContent.replaceAll(oldRepoName, repositoryName);
  appDelegateContent = appDelegateContent.replaceAll(
    oldRepoName,
    repositoryName,
  );
  launchScreenContent = launchScreenContent.replaceAll(
    oldRepoName,
    repositoryName,
  );
  contentsContent = contentsContent.replaceAll(oldRepoName, repositoryName);

  fs.writeFileSync(gradlePath, gradleContent);
  fs.writeFileSync(stringsXmlPath, stringsXmlContent);
  fs.writeFileSync(mainActivityPath, mainActivityContent);
  fs.writeFileSync(mainApplicationPath, mainApplicationContent);
  fs.writeFileSync(projectiOSPath, projectiOSContent);
  fs.writeFileSync(developmentSchemePath, developmentSchemeContent);
  fs.writeFileSync(stagingSchemePath, stagingSchemeContent);
  fs.writeFileSync(productionSchemePath, productionSchemeContent);
  fs.writeFileSync(appJsonPath, appJsonContent);
  fs.writeFileSync(packageJsonPath, packageJsonContent);
  fs.writeFileSync(settingsGradlePath, settingsGradleContent);
  fs.writeFileSync(podFilePath, podFileContent);
  fs.writeFileSync(appDelegatePath, appDelegateContent);
  fs.writeFileSync(launchScreenPath, launchScreenContent);
  fs.writeFileSync(contentsPath, contentsContent);

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
  fs.renameSync(`ios/${oldRepoName}`, `ios/${repositoryName}`);
  fs.renameSync(
    `ios/${oldRepoName}.xcworkspace`,
    `ios/${repositoryName}.xcworkspace`,
  );
  fs.renameSync(
    `ios/${oldRepoName}.xcodeproj`,
    `ios/${repositoryName}.xcodeproj`,
  );

  console.log('\n✅ Initialization complete!');

  console.log('\nPlease run this manually before running:');
  console.log('yarn run clean && yarn run arch:generate-env');
  console.log('\nYour app is now ready 🚀, Happy coding ~');

  rl.close();
}

main();
