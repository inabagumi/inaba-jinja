---
title: "@inabagumi/eslint-config"
---

- [npm](https://www.npmjs.com/package/@inabagumi/eslint-config)

[ESLint](https://eslint.org/) の共有設定です。

```json
{
  "name": "example project",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "latest",
    "@typescript-eslint/parser": "latest",
    "@inabagumi/eslint-config": "latest",
    "eslint-config-prettier": "latest",
    "eslint-plugin-prettier": "latest",
    "prettier": "latest",
    "typescript": "latest"
  },
  "eslintConfig": {
    "extends": ["@inabagumi"]
  }
}
```

ESLint の設定で `extends` に `@inabagumi` を追加することによって共有の設定が利用できます。
