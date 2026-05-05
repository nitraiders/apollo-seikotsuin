---
name: apollo_seikotsuin_mastery
description: "アポロ整骨院 8ページ構成サイトの管理・デプロイ・口コミ運用"
---

# 🏥 Apollo Seikotsuin Mastery

このスキルは、アポロ整骨院公式サイトの運用・保守・デプロイメントを効率的に実行することを目的とする。

## ⚙️ 基本構成
- **Deployment**: Base64方式PHPデプロイアー (`deploy_all_8.php`)
- **Frontend**: 静的HTML + `theme.css` (Orange/Yellowブランド)
- **API**: Cloudflare Pages Functions (`functions/api/reviews.js`)
- **Database**: Cloudflare KV (`MESSAGE_KV`)

## 📋 デプロイ手順
1.  **HTML/CSS修正**: 該当ファイルを編集。
2.  **ビルド**: `node build_deploy_8.js` を実行し `deploy_all_8.php` を更新。
3.  **反映**: PHPファイルをサーバーへアップし実行。

## 🛡️ トラブルシューティング
- **デプロイ構文エラー (Problem 21)**: PHP配列の記法が `[]` と `=>` であることを確認。JSスタイルの `{}` は厳禁。
- **画像が表示されない**: `node scratch/make_img_deployer.js` を実行して `deploy_images.php` を更新し、サーバーで実行する。
- **口コミが消えた**: 意図的にKVを空にした場合、APIが `INITIAL_REVIEWS` を自動投入する仕様。

## 🏰 完成形 (Final Form) 仕様
2026年5月5日時点の構成を最終正解とする。
- ウォーターベッドセクションは横並びレイアウト。
- ブランドカラーはオレンジ（#F39800）を基調とする。
