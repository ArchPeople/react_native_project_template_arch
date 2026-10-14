/** @param {import('plop').NodePlopAPI} plop */
module.exports = function (plop) {
  plop.setGenerator('feature', {
    description: 'plop template for new feature',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the feature name?',
      },
    ],

    actions: [
      {
        type: 'add',
        path: '../../src/features/{{kebabCase name}}/index.ts',
        templateFile: 'index.ts.hbs',
      },
      {
        type: 'add',
        path: '../../src/features/{{kebabCase name}}/store/{{camelCase name}}Store.ts',
        templateFile: 'store/store.ts.hbs',
      },
      {
        type: 'add',
        path: '../../src/features/{{kebabCase name}}/api/{{camelCase name}}Api.ts',
        templateFile: 'api/api.ts.hbs',
      },
      {
        type: 'add',
        path: '../../src/features/{{kebabCase name}}/view/screen/{{pascalCase name}}Screen.tsx',
        templateFile: 'view/screen/screen.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../src/features/{{kebabCase name}}/view/component/SampleComponent.tsx',
        templateFile: 'view/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../src/features/{{kebabCase name}}/view/section/AppBarSection.tsx',
        templateFile: 'view/section/appBar.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../src/features/{{kebabCase name}}/view/section/BodySection.tsx',
        templateFile: 'view/section/body.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../src/features/{{kebabCase name}}/view/{{pascalCase name}}View.tsx',
        templateFile: 'view/view.tsx.hbs',
      },
      {
        type: 'append',
        path: '../../src/app/navigation/navigator.ts',
        pattern: /\/\/ @plop-navigation-import-anchor <-- Do not remove/g,
        template:
          "import { {{pascalCase name}}View } from '@features/{{kebabCase name}}';",
      },
      {
        type: 'append',
        path: '../../src/app/navigation/navigator.ts',
        pattern: /  \/\/ @plop-navigation-param-anchor <-- Do not remove/g,
        template: '  {{pascalCase name}}: undefined,',
      },
      {
        type: 'append',
        path: '../../src/app/navigation/navigator.ts',
        pattern: /    \/\/ @plop-navigation-screen-anchor <-- Do not remove/g,
        template:
          '    {{pascalCase name}}: {\n      screen: {{pascalCase name}}View,\n    },',
      },
    ],
  });
};
