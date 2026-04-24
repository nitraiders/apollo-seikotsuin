// gen_index_full_hpb.js - Generate full HPB style index.html
const fs = require('fs');
const path = require('path');

const scriptDir = __dirname;

const html = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="\u8349\u52a0\u5e02\u306e\u30a2\u30dd\u30ed\u6574\u9aa8\u9662\u3002\u5b8c\u5168\u500b\u5ba4\u306e\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u7a7a\u9593\u3067\u30ea\u30e9\u30c3\u30af\u30b9\u3002\u5168\u8eab\u30de\u30c3\u30b5\u30fc\u30b8\uff16\uff10\u5206\uff13,\uff16\uff10\uff10\u5186\uff5e\u3002">
    <title>\u30a2\u30dd\u30ed\u6574\u9aa8\u9662\uff5c\u30db\u30c3\u30c8\u30da\u30c3\u30da\u30fc\u30d3\u30e5\u30fc\u30c6\u30a3\u30fc</title>
    <link rel="stylesheet" href="theme.css">
</head>
<body>
    <div class="outer-container">
        <div class="breadcrumb">
            <div class="container">
                \u30ea\u30e9\u30af\u30bc\u30fc\u30b7\u30e7\u30f3\u30c8\u30c3\u30d7 <span>&gt;</span> \u95a2\u6771 <span>&gt;</span> \u8349\u52a0\u30fb\u8d8a\u8c37 <span>&gt;</span> \u30a2\u30dd\u30ed\u6574\u9aa8\u9662
            </div>
        </div>

        <div class="container">
            <header class="header">
                <img src="images/logo.png" alt="\u30a2\u30dd\u30ed\u6574\u9aa8\u9662" class="header__logo">
            </header>

            <div class="salon-header">
                <h1 class="salon-header__name">\u30a2\u30dd\u30ed\u6574\u9aa8\u9662</h1>
                <div class="salon-header__catch">\uff14\u6708\u5348\u524d\u7a7a\u304d\u3042\u308a\u307e\u3059\u2606 \u3010\u5b8c\u5168\u500b\u5ba4\u3011 \u3010\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u7a7a\u9593\u3011 \u3010\u30ea\u30e9\u30c3\u30af\u30b9\u3011 \uff16\uff10\u5206\uff13,\uff16\uff10\uff10\u5186\uff5e</div>
            </div>

            <div class="main-visual">
                <img src="images/main_visual.jpg" alt="\u30a2\u30dd\u30ed\u6574\u9aa8\u9662 \u30e1\u30a4\u30f3\u30d3\u30b8\u30e5\u30a2\u30eb">
            </div>

            <section>
                <h2 class="section-title">\u30af\u30fc\u30dd\u30f3\uff06\u30e1\u30cb\u30e5\u30fc</h2>
                <div class="coupon-list">
                    <div class="coupon-card">
                        <span class="coupon-card__name">\u5168\u8eab\u30de\u30c3\u30b5\u30fc\u30b8\uff16\uff10\u5206</span>
                        <p class="coupon-card__desc">\u304a\u75b2\u308c\u7b87\u6240\u306a\u3069\u304a\u6c17\u8efd\u306b\u304a\u5474\u3057\u4ed8\u3051\u304f\u3060\u3055\u3044\u3002\u304a\u597d\u307f\u306e\u5f37\u3055\u3082\u8abf\u6574\u53ef\u80fd\u3067\u3059\u3002</p>
                        <div class="coupon-card__footer">
                            <span class="coupon-card__price">\u00a5\uff13,\uff16\uff10\uff10</span>
                            <a href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000644975" class="coupon-card__btn">\u7a7a\u5e2d\u78ba\u8a8d\u30fb\u4e88\u7d04\u3059\u308b</a>
                        </div>
                    </div>
                    <div class="coupon-card">
                        <span class="coupon-card__name">\u5168\u8eab\u30de\u30c3\u30b5\u30fc\u30b8\uff19\uff10\u5206</span>
                        <p class="coupon-card__desc">\u4eca\u65e5\u306f\u3057\u3063\u304b\u308a\u3068\u305d\u3093\u306a\u65e5\u306b\u304a\u75b2\u308c\u7b87\u6240\u306a\u3069\u304a\u6c17\u8efd\u306b\u304a\u5474\u3057\u4ed8\u3051\u304f\u3060\u3055\u3044\u3002</p>
                        <div class="coupon-card__footer">
                            <span class="coupon-card__price">\u00a5\uff15,\uff14\uff10\uff10</span>
                            <a href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000644975" class="coupon-card__btn">\u7a7a\u5e2d\u78ba\u8a8d\u30fb\u4e88\u7d04\u3059\u308b</a>
                        </div>
                    </div>
                    <div class="coupon-card">
                        <span class="coupon-card__name">\u30af\u30a4\u30c3\u30af\u30de\u30c3\u30b5\u30fc\u30b8\uff13\uff10\u5206</span>
                        <p class="coupon-card__desc">\u304a\u75b2\u308c\u306e\u7b87\u6240\u4e2d\u5fc3\u306b\u3082\u307f\u307b\u3050\u3057\u3057\u307e\u3059\u3002</p>
                        <div class="coupon-card__footer">
                            <span class="coupon-card__price">\u00a5\uff12,\uff12\uff10\uff10</span>
                            <a href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000644975" class="coupon-card__btn">\u7a7a\u5e2d\u78ba\u8a8d\u30fb\u4e88\u7d04\u3059\u308b</a>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 class="section-title">\u30b5\u30ed\u30f3\u30c7\u30fc\u30bf</h2>
                <table class="data-table">
                    <tr><th>\u4f4f\u6240</th><td>\u57fc\u7389\u770c\u8349\u52a0\u5e02\u65b0\u5584\u753a\uff15\uff11\uff13\uff0d\uff11\uff10</td></tr>
                    <tr><th>\u30a2\u30af\u30bb\u30b9</th><td>\u65b0\u7530\u99c5\u304b\u3089\u5f92\u6b69\uff11\uff12\u5206\u3001\u30d0\u30b9\u505c\u89d2\u5c4b\u6a4b\u30d0\u30b9\u505c\u76ee\u306e\u524d</td></tr>
                    <tr><th>\u55b6\u696d\u6642\u9593</th><td>\u5e73\u65e5 \uff19:\uff10\uff10\uff5e\uff12\uff10:\uff10\uff10\uff08\u6700\u7d42\u53d7\u4ed8 \uff11\uff19:\uff13\uff10\uff09</td></tr>
                    <tr><th>\u5b9a\u4f11\u65e5</th><td>\u571f\u66dc\u30fb\u65e5\u66dc\u30fb\u795d\u65e5</td></tr>
                    <tr><th>\u652f\u6255\u3044\u65b9\u6cd5</th><td>\u73fe\u91d1\u306e\u307f\u3002\u30af\u30ec\u30b8\u30c3\u30c8\u304a\u53d6\u308a\u6271\u3044\u306a\u3057\u3002</td></tr>
                    <tr><th>\u8a2d\u5099</th><td>\u7dcf\u6570\uff11\uff08\u5b8c\u5168\u500b\u5ba4\uff11\uff09</td></tr>
                    <tr><th>\u30b9\u30bf\u30c3\u30d5\u6570</th><td>\u7dcf\u6570\uff11\u4eba\uff08\u65bd\u8853\u8005\uff08\u30ea\u30e9\uff09\uff11\u4eba\uff09</td></tr>
                    <tr><th>\u5099\u8003</th><td>\u3054\u8cea\u554f\u7b49\u3054\u3056\u3044\u307e\u3057\u305f\u3089\u304a\u6c17\u8efd\u306b\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002</td></tr>
                </table>
            </section>

            <section>
                <h2 class="section-title">\u30de\u30c3\u30d7</h2>
                <div class="map-container">
                    <iframe src="https://maps.google.com/maps?q=\u57fc\u7389\u770c\u8349\u52a0\u5e02\u65b0\u5584\u753a513-10&output=embed" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </section>

            <footer class="footer">
                &copy; \u30a2\u30dd\u30ed\u6574\u9aa8\u9662 All Rights Reserved.
            </footer>
        </div>

        <div class="action-bar">
            <a href="tel:048-954-5511" class="action-bar__btn action-bar__btn--tel">
                <span class="action-bar__sub">\u3053\u3061\u3089\u304b\u3089\u3054\u4e88\u7d04</span>
                \u96fb\u8a71\u4e88\u7d04
            </a>
            <a href="https://lin.ee/6cYRjnW" class="action-bar__btn action-bar__btn--line">
                <span class="action-bar__sub">24\u6642\u9593\u53d7\u4ed8</span>
                LINE\u4e88\u7d04
            </a>
        </div>
    </div>
</body>
</html>`;

const outputPath = path.join(scriptDir, 'index.html');
fs.writeFileSync(outputPath, html, 'utf8');
console.log('Full HPB Style index.html generated.');
