---
sidebar: auto
---

# Haneru Developers とは?

Haneru Developers はバーチャル YouTuber の[因幡はねるさん](https://www.youtube.com/channel/UC0Owc36U9lOyi9Gx9Ic-4qg)をテーマとしたアプリやサービスの開発を主として行うコミュニティです。因幡はねるさんのことを応援している人たちがメンバーになっています。

開発されたアプリやサービスのソースコードは特別な事情がない限り [MIT License](https://opensource.org/licenses/MIT) が適用されたオープンソースソフトウェアとして [GitHub](https://github.com/inabagumi) で公開されています。[TypeScript](https://www.typescriptlang.org/) を主に用いて開発が行われています。

## npm パッケージ

Haneru Developers では npm パッケージの公開をしています。複数のリポジトリで横断的に使われる設定ファイルを `@inabagumi` というスコープで管理しています。

### [`@inabagumi/prettier-config`](https://www.npmjs.com/package/@inabagumi/prettier-config)

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

### [`@inabagumi/renovate-config`](https://www.npmjs.com/package/@inabagumi/renovate-config)

[Renovate](https://renovatebot.com/) の共有設定です。

```json
{
    "extends": ["@inabagumi"]
}
```

前述した内容の JSON ファイルを `.github/renovate.json` という名前で追加すると共有の設定が利用できます。

このパッケージは Renovate が動かしている bot が利用するものです。そのためプロダクトの依存に含める必要はありません。

## お問い合わせ

なにか伝えたいことがある場合はそれぞれのアプリケーションのリポジトリの Issue、もしくは [contact@haneru.dev](mailto:contact@haneru.dev) までご連絡ください。本業の傍らで開発をしているため、返事の保証は致しかねます。
