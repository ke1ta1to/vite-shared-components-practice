# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト構成

このプロジェクトはpnpmワークスペースを使用したモノレポで、共有Reactコンポーネントライブラリの開発を行います。

### ワークスペース構造
- `packages/shared-components/`: 共有コンポーネントライブラリ（メインパッケージ）
- `apps/user/`: Vite React アプリケーション（shared-componentsを使用）

### パッケージ管理
- パッケージマネージャー: pnpm@10.12.1
- ワークスペース設定: pnpm-workspace.yaml

## 開発コマンド

### 基本的なコマンド
```bash
# 依存関係のインストール
pnpm install

# 特定のワークスペースでコマンド実行
pnpm -F shared-components <command>  # shared-componentsパッケージ
pnpm -F user <command>               # userアプリ

# ルートレベルから各ワークスペースのコマンド実行
pnpm shared <command>  # shared-componentsパッケージ
pnpm user <command>    # userアプリ
```

### shared-componentsパッケージ
```bash
pnpm -F shared-components dev     # 開発モード（watchモード）
pnpm -F shared-components build   # ビルド
pnpm -F shared-components lint    # ESLint実行
```

### userアプリ
```bash
pnpm -F user dev      # 開発サーバー起動
pnpm -F user build    # プロダクションビルド
pnpm -F user lint     # ESLint実行
pnpm -F user preview  # ビルド後のプレビュー
```

## アーキテクチャ

### shared-componentsライブラリ
- TypeScript + React + Vite構成
- `src/components/`配下にコンポーネントを配置
- 各コンポーネントは専用ディレクトリ内で`ComponentName.tsx`と`index.tsx`を持つ
- `src/index.ts`でライブラリ全体のエクスポートを管理
- vite-plugin-dtsで型定義ファイルを生成
- ビルド成果物は`dist/`に出力

### コンポーネント開発パターン
- Functional Component + TypeScript
- Props定義は`interface ComponentNameProps`形式
- デフォルトpropsは分割代入で設定
- インラインスタイルを使用（現在の実装パターン）

### ワークスペース依存関係
- userアプリは`"@vite-shared-components-practice/shared-components": "workspace:*"`でライブラリを参照
- shared-componentsの変更は自動的にuserアプリに反映される