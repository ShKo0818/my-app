

# 営業顧客管理システム（仮）

シンプルな顧客管理システムのフロントエンド実装をいたしました。
このアプリケーションをはログイン機能と顧客情報閲覧、登録、更新、削除機能を提供します



## 目次

- [機能概要](#機能概要)
- [セットアップ手順](#セットアップ手順)
- [使用した技術・ライブラリ](#使用した技術ライブラリ)
- [実装した機能の説明](#実装した機能の説明)
- [動作確認方法](#動作確認方法)
- [フォルダ構成](#フォルダ構成)
- [今後の改善点](#今後の改善点)

## 機能概要

このアプリケーションは以下の主要機能を提供します：

- シンプルなログイン画面
- 顧客情報の一覧表示
- 顧客情報の検索機能
- 顧客データの並び替え機能


## セットアップ手順

以下の手順でアプリケーションをローカル環境で実行できます。

### 前提条件

- Node.js (v14.0.0 以上)
- npm (v6.0.0 以上)



## セットアップ手順

以下の手順でアプリケーションをローカル環境で実行できます。

### 前提条件

- Node.js (v14.0.0 以上)
- npm (v6.0.0 以上)

### インストール

1. リポジトリをクローンします

```bash
git clone https://github.com/ShKo0818/my-app.git
cd my-app
```

2. 依存パッケージをインストールします

```bash
npm install
```

3. アプリケーションを起動します

```bash
npm start
```

4. ブラウザで以下のURLにアクセスします

```
http://localhost:3000
```

## 使用した技術・ライブラリ

- **フレームワーク**: React (Create React App)
- **UI ライブラリ**: Material-UI Bootstrap5.3.5
- **状態管理**: React Context API
- **スタイリング**: Styled Components
- **フォーム管理**: React Hook Form
- **データ処理**: Lodash
- **開発ツール**: Visual Studio Code

## 実装した機能の説明

### 1. ログイン機能

- ユーザーID・パスワード入力フォーム
- 入力バリデーション（空欄チェック）
- エラーメッセージ表示
- ログイン状態の保持（Context APIで管理）

### 2. 顧客一覧画面

- 顧客情報の表形式での表示
  - 顧客企業名
  - 顧客担当者名
  - メールアドレス
  - 電話番号
  - 住所
  - 登録日

- **検索機能**
  - 顧客名による絞り込み検索
  - リアルタイム検索結果表示
- **並び替え機能**
  - 名前順（昇順・降順）
  - 登録日順（昇順・降順）


### 3. デザイン

- Material-UIとBootstrapを使用した簡素で視認しやすいデザイン

## 動作確認方法

### ログイン画面

1. アプリケーションを起動すると、最初にログイン画面が表示されます
2. ゲストモードでの使用が可能、またメールアドレス、パスワードのテスト入力でも使用可能です。
3. 入力欄を空にしてログインボタンを押すと、エラーメッセージが表示されます

### 顧客一覧画面

1. ログイン後、自動的に顧客一覧画面に遷移します
2. 画面上部の検索バーに顧客名を入力して、顧客を検索できます
3. テーブルの企業名横の↑をクリックすると、データを並び替えることができます

## フォルダ構成

```
src/
├── components/        # 再利用可能なUIコンポーネント
│   ├── Customer/      # 顧客情報管理コンポーネント
│   ├── CustomerForm/  # 既存顧客情報更新コンポーネント
│   └── Sidebar/       # サイドバー情報管理コンポーネント
├── pages/
│   ├── CustomerRegister/   # 新規顧客情報管理ファイル
│   ├── Dashboard/        # ホーム画面管理ファイル
│   └── Loginpage/  　　# ログインページ管理
├
└── App.js             # アプリケーションのルート


## 今後の改善点

- タスク進行状況確認画面の実装
- モバイル環境でのデザインの改善
- バックエンドとの連携（API実装）
- カレンダー形式での業務タスク管理
- API実装
- GoogleMapとの連携による顧客先アクセス情報の改善
