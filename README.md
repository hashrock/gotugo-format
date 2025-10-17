# gotugo-format

日本語の日付フォーマットを変換するツール

下記の日程でご都合いかがでしょうか

## 機能

このアプリケーションは、複数の日付フォーマットを日本語の標準フォーマット（MM月DD日（曜日））に変換します。

### 対応フォーマット

- `2019年11月17日` → `11月17日（日）`
- `11月17日` → `11月17日（日）`
- `11/17` または `11／17` → `11月17日（日）`

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## 技術スタック

- React 19
- TypeScript
- Vite (Rolldown)
- GitHub Actions (GitHub Pages へのデプロイ)
