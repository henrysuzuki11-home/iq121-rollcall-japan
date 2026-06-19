# 親みまもり研究所（Oyami Mamori Kenkyujo）

家族の見守り・安否確認・防災に関する情報メディア。見守りアプリ **Roll Call** の日本国内でのダウンロード促進を目的とした、SEO 最適化済みの Astro 製静的サイトです。

## 特長

- 🏠 **ホームページ** — ヒーロー、カテゴリー、注目記事、新着記事、アプリ CTA
- 📰 **記事システム** — Astro Content Collections（型安全な frontmatter）
- 🗂 **カテゴリー** — 5 カテゴリー × 一覧／個別ページ
- 🔍 **SEO** — `<BaseHead>`（メタ／OGP／Twitter／canonical）、JSON-LD 構造化データ（Organization / WebSite / Article / BreadcrumbList）
- 🗺 **サイトマップ** — `@astrojs/sitemap`（`/sitemap-index.xml`）
- 🤖 **robots.txt** — `public/robots.txt`
- 🔗 **関連記事 & 内部リンク** — カテゴリー・タグのスコアリングで自動表示＋記事本文内の手動リンク
- 📱 **ダウンロードボタン** — iOS / Android（`<DownloadButtons>`）
- 📡 **RSS** — `/rss.xml`

## 開発

```bash
npm install      # 依存関係のインストール
npm run dev      # 開発サーバー (http://localhost:4321)
npm run build    # 本番ビルド → dist/
npm run preview  # ビルド結果のプレビュー
```

## 公開前の設定

1. **`src/consts.ts`** の `SITE_URL` を本番ドメインに変更
2. **`public/robots.txt`** の `Sitemap:` URL を本番ドメインに変更
3. （任意）`public/og-default.svg` をブランドの OGP 画像に差し替え

## 記事の追加方法

`src/content/articles/` に Markdown ファイルを追加します。

```markdown
---
title: 記事タイトル
description: 検索結果に表示される説明（120 文字程度）
category: elderly-care   # consts.ts の CATEGORIES の slug
tags: [タグ1, タグ2]
pubDate: 2026-06-20
featured: false          # true でトップページの注目記事に
---

本文（Markdown）。他記事へは /articles/<slug> で内部リンク。
```

カテゴリーの追加・変更は `src/consts.ts` の `CATEGORIES` を編集してください。
