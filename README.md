## 📁 フォルダ構成 (Directory Structure)

本プロジェクトは React + Vite で構築されており、コンポーネントやデータを機能ごとに分割して管理しています。

```text
moNa-page/
 ├── public/                # ビルド時に加工されない静的ファイル（ファビコンなど）
 │   └── vite.svg           
 │
 ├── src/                   # ソースコード本体
 │   ├── assets/            # Viteによって最適化されるアセット（画像など）
 │   │   └── images/        # ページ・用途ごとに整理された画像フォルダ
 │   │       ├── common/    # サイト全体で共通して使う画像（ロゴ、背景など）
 │   │       ├── guide/     # User Guide用の画像
 │   │       ├── home/      # トップページ（Heroセクションなど）用の画像
 │   │       ├── news/      # News記事内で使用する画像
 │   │       └── products/  # 各プロダクト（moNa, moNa2など）の画像
 │   │
 │   ├── components/        # 再利用可能なUIコンポーネント
 │   │   └── TweetEmbed.jsx # ツイート埋め込み用コンポーネント
 │   │
 │   ├── data/              # サイト内に表示するコンテンツデータ
 │   │   ├── items.js       # ナビゲーション、商品情報、メンバー情報などの基本データ
 │   │   └── news.jsx       # News記事のデータ（画像やリンクなどのJSXタグを含む）
 │   │
 │   ├── pages/             # 各独立したページ（ビュー）のコンポーネント
 │   │   ├── AccessoriesList.jsx # アクセサリー・パーツ一覧ページ
 │   │   ├── Keymap-Editor.jsx   # キーマップエディタ画面
 │   │   ├── moNa.jsx            # 商品詳細ページ (moNa)
 │   │   ├── moNa2.jsx           # 商品詳細ページ (moNa 2)
 │   │   ├── moNa2plus.jsx       # 商品詳細ページ (moNa 2+)
 │   │   ├── NewsList.jsx        # News一覧・ポップアップ表示用ページ
 │   │   └── UserGuide.jsx       # ユーザーガイド画面
 │   │
 │   ├── App.jsx            # メインコンポーネント（ルーティング機能とトップページのUI）
 │   ├── index.css          # グローバルCSS（Tailwind CSSの読み込み、カスタムフォント等）
 │   └── main.jsx           # Reactのアプリケーションエントリポイント
 │
 ├── .gitignore             # Gitの管理から除外するファイルの設定
 ├── eslint.config.js       # ESLint（構文チェックツール）の設定ファイル
 ├── index.html             # ベースとなるHTMLファイル
 ├── package.json           # プロジェクトの依存パッケージやスクリプトの定義
 ├── package-lock.json      # インストールされたパッケージの正確なバージョン情報
 ├── README.md              # プロジェクトの説明書（このファイル）
 └── vite.config.js         # Vite（ビルドツール・開発サーバー）の設定ファイル


## Todo
[] 各商品ページの作成
[] ユーザーガイドの作成
[] Newsの修正
[] 画像の差し替え