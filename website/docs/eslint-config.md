---
title: "@inabagumi/eslint-config"
---

- [npm](https://www.npmjs.com/package/@inabagumi/eslint-config)

[ESLint](https://eslint.org/) の共有設定です。

```json
{
  "name": "example project",
  "devDependencies": {
    "@inabagumi/eslint-config": "latest",
    "prettier": "latest",
    "typescript": "latest"
  },
  "eslintConfig": {
    "extends": ["@inabagumi"]
  }
}
```

Prettier と TypeScript と一緒にインストールした上で ESLint の設定の `extends` に `@inabagumi` を追加することによって共有の設定が利用できます。

また React 用に `@inabagumi/eslint-config-react`、Vue 用に `@inabagumi/eslint-config-vue` がそれぞれ用意されています。`@inabagumi/eslint-config` と同様に `"extends": ["@inabagumi/react"]` のように `extends` に `@inabagumi/react` や `@inabagumi/vue` を書き加えることによって利用できます。
