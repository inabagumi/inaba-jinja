# npm パッケージ

Haneru Developers では npm パッケージの公開をしています。複数のリポジトリで横断的に使われる設定ファイルを `@inabagumi` というスコープで管理しています。

## `@inabagumi/prettier-config`

- [npm](https://www.npmjs.com/package/@inabagumi/prettier-config)
- [Yarn](https://yarnpkg.com/ja/package/@inabagumi/prettier-config)

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
- [Yarn](https://yarnpkg.com/ja/package/@inabagumi/renovate-config)

[Renovate](https://renovatebot.com/) の共有設定です。

```json
{
  "extends": ["@inabagumi"]
}
```

前述した内容の JSON ファイルを `.github/renovate.json` という名前で追加すると共有の設定が利用できます。

このパッケージは Renovate が動かしている bot が利用するものです。そのためプロダクトの依存に含める必要はありません。
