# How to run the app 🏃‍♂️

## Ready-to-use flavors

We provided you with ready to use flavors:

- development
- staging
- production

## Prepare the env

Create a .env file (If you haven't already from initialization) in root project with this example content:

```bash
FLAVOR=development
OTHER_KEY_1=othervalue1
OTHER_KEY_2=othervalue2
```

> [!NOTE]
> The key in the .env file will be changed into camel case format, for example: FLAVOR to flavor, or OTHER_KEY_1 to otherKey1

> [!WARNING]
> Please always include the 'FLAVOR=development' in the .env file. You can change the FLAVOR to staging or production or even your custom flavor.

Everytime you add a value in the .env file, don't forget to run:

```bash
yarn run arch:generate-env
```

If somehow you cannot run the script, you'll have to manually create an env.ts file in this [path](/src/core/config/) and write your environment values in camel case:

```javascript
export const env = {
  flavor: 'flavor',
  otherKey1: 'otherValue1',
  otherKey2: 'otherValue2',
};
```

> [!NOTE]
> The env.ts file is always ignored, so don't be surprised

## Run the App

For Android:

```bash
yarn run android:dev
```

```bash
yarn run android:stg
```

```bash
yarn run android:prod
```

For iOS:

```bash
yarn run ios:dev
```

```bash
yarn run ios:stg
```

```bash
yarn run ios:prod
```
