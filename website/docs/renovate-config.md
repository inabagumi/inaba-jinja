---
title: "@inabagumi/renovate-config"
---

- [npm](https://www.npmjs.com/package/@inabagumi/renovate-config)

[Renovate](https://renovatebot.com/) の共有設定です。

```json
{
  "extends": ["@inabagumi"]
}
```

前述した内容の JSON ファイルを `.github/renovate.json` という名前で追加すると共有の設定が利用できます。

このパッケージは Renovate が動かしている bot が利用するものです。そのためプロダクトの依存に含める必要はありません。
