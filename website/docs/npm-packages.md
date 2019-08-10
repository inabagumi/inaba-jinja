---
title: npm パッケージ
---

Haneru Developers では npm パッケージの公開をしています。複数のリポジトリで横断的に使われる設定ファイルを `@inabagumi` というスコープで管理しています。

## `@inabagumi/eslint-config`

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

## `@inabagumi/prettier-config`

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

## `@inabagumi/renovate-config`

- [npm](https://www.npmjs.com/package/@inabagumi/renovate-config)

[Renovate](https://renovatebot.com/) の共有設定です。

```json
{
  "extends": ["@inabagumi"]
}
```

前述した内容の JSON ファイルを `.github/renovate.json` という名前で追加すると共有の設定が利用できます。

このパッケージは Renovate が動かしている bot が利用するものです。そのためプロダクトの依存に含める必要はありません。
