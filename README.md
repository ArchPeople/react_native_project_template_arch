# React Native Project Template - "Arch"

> A Template to start React Native app development with minimal effort. Introducing the "Arch".

## Quick Start 🎮

```bash
git clone https://github.com/michmadheo/react_native_project_template_arch.git
```

Or download via [releases](https://github.com/michmadheo/react_native_project_template_arch/releases).

## What's included 🚀

Essentials To ease your project setup. Here you can find:

- ✅ The one and only navigation system with [react-navigation](https://www.npmjs.com/package/@react-navigation/native)
- ✅ Robust API Fetching with [axios](https://www.npmjs.com/package/axios)
- ✅ Easy to use [redux-toolkit](https://www.npmjs.com/package/@reduxjs/toolkit) design pattern (see [demo-feature](src/features/demo-feature) for example)
- ✅ Simple & reliable local data source storage with [react-native-async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)
- ✅ Assortment of ready-to-use themes for styling (see [themes](src/app/themes) for example)
- ✅ Helpful utilities and extensions (see [general-helpers](src/core/general-helpers) for example)
- ✅ Structured atomic design pattern for components (see [components](src/app/components) for example)

Check the [package.json](package.json) for packages versions.

> [!TIP]
> Didn't like what's included? want to swap packages? feel free to do it!

## Requirements 🛠️

These are the requirements to run this template:

- Java minimum version 17
- React Native version 0.81.1
- Node version 20.0.0
- pnpm version 10.15.0
- Android Studio minimum version Meerkat 2024.3.1
- Xcode up minimum version 16.4

> [!IMPORTANT]
> You can change pnpm to either npm or yarn. If so, please delete pnpm-lock.yaml first

> [!NOTE]
> Requirements doesn't match your setup? find another template version in [releases](https://github.com/michmadheo/react_native_project_template_arch/releases).

## Change package name 1/3 (Android) 📦

- Search for "com.react_native_project_template_arch" and replace it with your package (Ex: com.awesome.app)

- Change the path of android/app/src/main/java/com/com.react_native_project_template_arch to your package name (Ex: android/app/src/main/java/com/com.awesome.app)

## Change package name 2/3 (iOS) 📦

- Open xcode and change the bundle identifer to your package (Ex: com.awesome.app)

## Change package name 3/3 (Repo name) 📦

- In ios folder, look at these files:

```bash
react_native_project_template_arch
```

```bash
react_native_project_template_arch.xcodeproj
```

```bash
react_native_project_template_arch.xcworkspace
```

```bash
react_native_project_template_arch.xcodeproj/xcshareddata/xcschemes/react_native_project_template_arch.xcscheme
```

- Rename each folder name or xc files above with your repository name

- Search for react_native_project_template_arch and replace it with your gituhub repository name

- Clean the app by running:

```bash
pnpm run clean
```

## Change app name (First time change) 📲

Search for "Arch RN App" and rename it with your app name

## Manual Change app name (Android) 📲

Go to strings.xml and change the value to your app name

## Manual Change app name (iOS) 📲

Go to info.plist and change the value of CFBundleDisplayName and CFBundleName to your app name

## Change app icon (Android) ✨

- Check out this [Youtube video](https://www.youtube.com/watch?v=FRCWWvlTubQ) on how to change both icons for Android and iOS

## Run the app 🎉

Create a .env file in root project with this example content:

```bash
Demo=demo
OTHER_KEY_1=othervalue1
OTHER_KEY_2=othervalue2
```

> [!WARNING]
> Please include the 'Demo=demo' if this is the first time you use this template. You can change it later on config

And generate the env for the config with:

```bash
pnpm run generate:env
```

To run the app, do:

```bash
pnpm run android
pnpm run ios
```

> [!IMPORTANT]
> Once you are ready to build the app, don't forget to delete the .env file after you've generated the config. Else, your .env file's contents will be shown if the app is being decompiled
