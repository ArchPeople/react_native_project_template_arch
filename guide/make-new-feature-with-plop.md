# Plop Guide for new feature 💧

## Definition of feature

We define a single page as a "feature", that way we can gather all the required reducer, repository and UI of that specific feature.

An example of this would be features like "Sign in", "Order list", "Profile" etc

This is the base structure of our definition of a feature:

```text
.
└── feature_name/
    ├── reducer/
    │   ├── featureNameSlice.ts
    │   └── featureNameState.ts
    ├── repository/
    │   └── featureNameRepository.ts
    ├── view/
    │   ├── screen/
    │   │   └── FeatureNameScreen.tsx
    │   ├── section/
    │   │   └── NameSection.tsx
    │   ├── widget/
    │   │   └── NameWidget.tsx
    │   └── FeatureNameView.tsx
    └── index.ts
```

You can see the example in the [features](src/features/) folder

## Plop Usage

With Plop, you can generate the structure and all the files in an instant, you don't have to do a copy-paste-rename of your previous feature. We've already prepared the template for it.

To use Plop, type this:

```bash
yarn run plop:feature
```

A prompt will appear and ask for the feature name. Enter the feature name, for example order detail (plop will automatically change it into order_detail, so no worries)

Plop will then generate all the files.
