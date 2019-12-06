---
title: "@inabagumi/prettier-config"
---

- [npm](https://www.npmjs.com/package/@inabagumi/prettier-config)

[Prettier](https://prettier.io/) の共有設定です。

```json
{
  "name": "example project",
  "devDependencies": {
    "@inabagumi/prettier-config": "latest",
    "prettier": "latest"
  },
  "prettier": "@inabagumi/prettier-config"
}
```

前述した JSON ファイルのように `package.json` に `prettier` フィールドを追加し、`@inabagumi/prettier-config` という値にすると共有の設定が利用できます。
