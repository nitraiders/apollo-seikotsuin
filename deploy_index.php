<?php
/**
 * deploy_index.php
 * 最新の index.html を生成・上書きするスクリプト
 */

$html_content = <<<'HTML'
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>アポロ整骨院 | 草加市新善町のマッサージ・整体</title>
    <meta name="description" content="新田駅西口より徒歩12分。草加市新善町のアポロ整骨院。平日20時まで受付。全身マッサージ3,600円〜。LINE予約受付中。">
    <link rel="stylesheet" href="theme.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container header__content">
            <div class="header__logo">
                <a href="/"><img src="images/logo.png" alt="アポロ整骨院"></a>
            </div>
            <nav class="header__actions">
                <a href="tel:048-954-5511" class="btn btn--tel">電話予約</a>
                <a href="https://lin.ee/6cYRjnW" class="btn btn--line">LINE予約</a>
            </nav>
        </div>
    </header>

    <!-- Main Visual -->
    <section class="mv">
        <div class="container mv__inner">
            <div class="mv__content">
                <span class="mv__sub">4月午前空きあります☆ 【完全個室】</span>
                <h1 class="mv__main">心と体を整える、<br>60分3,600円〜の至福。</h1>
                <p class="mv__description">新田駅西口から徒歩12分。平日20時まで営業。<br>お仕事帰りにもお気軽にお立ち寄りください。</p>
            </div>
        </div>
    </section>

    <!-- Coupon Section -->
    <section class="coupons">
        <div class="container">
            <h2 class="section-title">限定クーポン・メニュー</h2>
            <div class="coupon-list">
                <!-- Coupon 1 -->
                <div class="coupon-card">
                    <div class="coupon-card__header">
                        <span class="coupon-tag">全員OK</span>
                        <h3 class="coupon-card__title">【定番人気】全身マッサージ 60分</h3>
                    </div>
                    <div class="coupon-card__body">
                        <p class="coupon-price">¥3,600</p>
                        <p class="coupon-desc">日頃の疲れをスッキリ解消。全身のコリを丁寧に揉みほぐします。</p>
                    </div>
                    <div class="coupon-card__footer">
                        <a href="https://lin.ee/6cYRjnW" class="btn btn--line btn--full">このクーポンでLINE予約</a>
                    </div>
                </div>

                <!-- Coupon 2 -->
                <div class="coupon-card">
                    <div class="coupon-card__header">
                        <span class="coupon-tag">全員OK</span>
                        <h3 class="coupon-card__title">【贅沢コース】全身マッサージ 90分</h3>
                    </div>
                    <div class="coupon-card__body">
                        <p class="coupon-price">¥5,400</p>
                        <p class="coupon-desc">特に疲れがひどい方に。たっぷり90分かけて全身を調整いたします。</p>
                    </div>
                    <div class="coupon-card__footer">
                        <a href="https://lin.ee/6cYRjnW" class="btn btn--line btn--full">このクーポンでLINE予約</a>
                    </div>
                </div>

                <!-- Coupon 3 -->
                <div class="coupon-card">
                    <div class="coupon-card__header">
                        <span class="coupon-tag">全員OK</span>
                        <h3 class="coupon-card__title">【サクッと解消】クイックマッサージ 30分</h3>
                    </div>
                    <div class="coupon-card__body">
                        <p class="coupon-price">¥2,200</p>
                        <p class="coupon-desc">お時間がない方に。気になる箇所を重点的に施術します。</p>
                    </div>
                    <div class="coupon-card__footer">
                        <a href="https://lin.ee/6cYRjnW" class="btn btn--line btn--full">このクーポンでLINE予約</a>
                    </div>
                </div>

                <!-- Coupon 4 -->
                <div class="coupon-card">
                    <div class="coupon-card__header">
                        <span class="coupon-tag">全員OK</span>
                        <h3 class="coupon-card__title">【足のむくみに】足つぼマッサージ 60分</h3>
                    </div>
                    <div class="coupon-card__body">
                        <p class="coupon-price">¥4,400</p>
                        <p class="coupon-desc">足裏の反射区を刺激し、内側からデトックス。足のだるさを解消。</p>
                    </div>
                    <div class="coupon-card__footer">
                        <a href="https://lin.ee/6cYRjnW" class="btn btn--line btn--full">このクーポンでLINE予約</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Salon Data Section -->
    <section class="salon-data">
        <div class="container">
            <h2 class="section-title">サロンデータ</h2>
            <div class="salon-grid">
                <div class="salon-info">
                    <table class="salon-table">
                        <tr>
                            <th>営業時間</th>
                            <td>平日 9:00〜20:00（最終受付 18:30）</td>
                        </tr>
                        <tr>
                            <th>定休日</th>
                            <td>土曜・日曜・祝日</td>
                        </tr>
                        <tr>
                            <th>住所</th>
                            <td>〒340-0054 埼玉県草加市新善町513-10</td>
                        </tr>
                        <tr>
                            <th>アクセス</th>
                            <td>新田駅西口より徒歩12分</td>
                        </tr>
                        <tr>
                            <th>電話番号</th>
                            <td><a href="tel:048-954-5511">048-954-5511</a></td>
                        </tr>
                    </table>
                </div>
                <div class="salon-map">
                    <!-- Google Map Placeholder (User should replace with real embed if desired) -->
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.91632731174!2d139.7901768!3d35.8572186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601893c530e9d6d3%3A0xc3485c29074cb67f!2z44CSMzQwLTAwNTQg5Z-8546J55yM6I2J5Yqg5biC5paw5善55S6NTEzLTEw!5e0!3m2!1sja!2sjp!4v1713600000000!5m2!1sja!2sjp" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </section>

    <!-- Review Section -->
    <section class="reviews">
        <div class="container">
            <h2 class="section-title">お客様の口コミ</h2>
            <div class="review-list">
                <div class="review-item">
                    <div class="review-header">
                        <span class="review-user">女性 / 40代 / 会社員</span>
                        <div class="stars">★★★★★ 5.0</div>
                    </div>
                    <p class="review-text">「デスクワークでガチガチだった肩が本当に楽になりました！店内も清潔感があり、リラックスして施術を受けられました。また伺います。」</p>
                </div>
                <div class="review-item">
                    <div class="review-header">
                        <span class="review-user">男性 / 30代 / 自営業</span>
                        <div class="stars">★★★★★ 5.0</div>
                    </div>
                    <p class="review-text">「立ち仕事で足のむくみがひどかったのですが、足つぼマッサージが終わった後は足が軽くなって驚きました。丁寧な説明も安心感があります。」</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer CTA (LINE Floating for Mobile) -->
    <div class="bottom-bar">
        <a href="tel:048-954-5511" class="bottom-bar__btn bottom-bar__btn--tel">電話予約</a>
        <a href="https://lin.ee/6cYRjnW" class="bottom-bar__btn bottom-bar__btn--line">LINE予約</a>
    </div>

    <footer class="footer">
        <div class="container footer__inner">
            <p>&copy; 2024 アポロ整骨院. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
HTML;

if (file_put_contents('index.html', $html_content)) {
    echo "Success: index.html has been updated with the latest configuration.";
} else {
    echo "Error: Failed to write index.html.";
}
?>
