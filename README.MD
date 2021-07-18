# Frontend 環境構築方法

## 環境構築方法

`Next.js` の起動時に、このフォルダの直下に`.env` ファイルが必要になるため
事前に以下のコマンドを実行し、ローカル環境用の `.env` ファイルを作成する

```sh
# .env.sample
cat .env.sample > .env
```

### 実行時に必要なソフトウェア等

- [node](https://nodejs.org/ja/download/)
- [yarn](https://yarnpkg.com/)

### 開発環境の構築

ESLint や Prettier の保存時の自動実行の設定を適用していただきたいため、VSCode での開発を推奨
