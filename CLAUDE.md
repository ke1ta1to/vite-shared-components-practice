# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト構成

このプロジェクトはpnpmワークスペースを使用したモノレポで、共有Reactコンポーネントライブラリの開発を行います。

### ワークスペース構造
- `packages/shared-components/`: 共有コンポーネントライブラリ（メインパッケージ）
- `apps/user/`: Vite React アプリケーション（shared-componentsを使用）
- `apps/admin/`: Vite React アプリケーション（shared-componentsを使用）

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
pnpm -F admin <command>              # adminアプリ

# ルートレベルから各ワークスペースのコマンド実行
pnpm shared <command>  # shared-componentsパッケージ
pnpm user <command>    # userアプリ
pnpm admin <command>   # adminアプリ
```

### shared-componentsパッケージ
```bash
pnpm -F shared-components dev     # 開発モード（watchモード）
pnpm -F shared-components build   # ビルド
pnpm -F shared-components lint    # ESLint実行
```

### アプリケーション（user/admin）
```bash
pnpm -F user dev      # 開発サーバー起動
pnpm -F user build    # プロダクションビルド
pnpm -F user lint     # ESLint実行
pnpm -F user preview  # ビルド後のプレビュー

pnpm -F admin dev     # 開発サーバー起動
pnpm -F admin build   # プロダクションビルド
pnpm -F admin lint    # ESLint実行
pnpm -F admin preview # ビルド後のプレビュー
```

## アーキテクチャ

### shared-componentsライブラリ
- TypeScript + React + Vite構成
- Material-UI (MUI) 7.1.2 + Emotionを使用
- `src/components/`配下にコンポーネントを配置
- 各コンポーネントは専用ディレクトリ内で`ComponentName.tsx`と`index.tsx`を持つ
- `src/index.ts`でライブラリ全体のエクスポートを管理
- vite-plugin-dtsで型定義ファイルを生成
- ビルド成果物は`dist/`に出力（ES modules と CommonJS の両方サポート）

### コンポーネント開発パターン
- Functional Component + TypeScript
- Props定義は`interface ComponentNameProps`形式
- デフォルトpropsは分割代入で設定
- Material-UI Buttonコンポーネントをラップしたカスタムコンポーネント
- インラインスタイルを使用（現在の実装パターン）

### ワークスペース依存関係
- user/adminアプリは`"@vite-shared-components-practice/shared-components": "workspace:*"`でライブラリを参照
- shared-componentsの変更は自動的に各アプリに反映される

## 技術スタック

### 共通依存関係
- **React**: 19.1.0
- **TypeScript**: 5.8.3
- **Vite**: 6.3.5
- **Material-UI**: 7.1.2 + Emotion
- **ESLint**: コード品質管理