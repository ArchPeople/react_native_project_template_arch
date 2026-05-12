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
        path: '../../src/features/{{kebabCase name}}/reducer/{{camelCase name}}Slice.ts',
        templateFile: 'reducer/slice.ts.hbs',
      },
      {
        type: 'add',
        path: '../../src/features/{{kebabCase name}}/reducer/{{camelCase name}}State.ts',
        templateFile: 'reducer/state.ts.hbs',
      },
      {
        type: 'add',
        path: '../../src/features/{{kebabCase name}}/repository/{{camelCase name}}Repository.ts',
        templateFile: 'repository/repository.ts.hbs',
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
        path: '../../src/app/store/store.ts',
        pattern: /^(import .* from .*;?)(?![\s\S]*^import)/m,
        template:
          "import {{camelCase name}}Reducer from '@features/{{kebabCase name}}/reducer/{{camelCase name}}Slice';",
      },
      {
        type: 'append',
        path: '../../src/app/store/store.ts',
        pattern: /    \/\/ @plop-reducer-anchor/g,
        template: '    {{camelCase name}}: {{camelCase name}}Reducer,',
      },
      {
        type: 'append',
        path: '../../src/app/navigation/navigator.ts',
        pattern: /\/\/ @plop-navigation-import-anchor/g,
        template:
          "import { {{pascalCase name}}View } from '@features/{{kebabCase name}}';",
      },
      {
        type: 'append',
        path: '../../src/app/navigation/navigator.ts',
        pattern: /  \/\/ @plop-navigation-param-anchor/g,
        template: '  {{pascalCase name}}: undefined,',
      },
      {
        type: 'append',
        path: '../../src/app/navigation/navigator.ts',
        pattern: /    \/\/ @plop-navigation-screen-anchor/g,
        template:
          '    {{pascalCase name}}: {\n      screen: {{pascalCase name}}View,\n    },',
      },
    ],
  });
};
