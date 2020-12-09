# @connctd/eslint-config-typescript

[![npm (scoped)](https://img.shields.io/npm/v/@connctd/eslint-config-typescript?style=flat-square)](https://www.npmjs.com/package/@connctd/eslint-config-typescript)

Recommended coding style for typescript projects.

This projects relies on eslint for recommendations and fixes.

Based on [airbnb/javascript](https://github.com/airbnb/javascript) and [typescript eslint recommended](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin).

## Usage

Add `@connctd/eslint-config-typescript` as a dev dependency to your project:

```sh
yarn add '@connctd/eslint-config-typescript' -D
```

Install the required peer dependencies:

```sh
npx install-peerdeps @connctd/eslint-config-typescript
```

OR

_(Recommended if you are installing this config from a custom private registry, since install-peerdeps only can fetches from the public npm registry)_

```sh
yarn add -D \
  typescript@4.1.2 \
  eslint@7.15.0 \
  @typescript-eslint/eslint-plugin@4.9.1 \
  @typescript-eslint/parser@4.9.1 \
  eslint-config-airbnb@18.2.1 \
  eslint-plugin-import@2.22.1 \
  eslint-plugin-jsx-a11y@6.4.1 \
  eslint-plugin-react@7.21.5 \
  eslint-plugin-react-hooks@4.2.0
```

Extend the `.eslintrc` of your target project by `@connctd/typescript`:

```json
{
    "extends": ["@connctd/typescript"]
}
```
