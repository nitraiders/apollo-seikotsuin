const fs = require('fs');
const path = require('path');

// Updated Tab List (8 Items)
const pages = [
    { name: 'ホーム', file: 'index.html', key: 'home' },
    { name: 'メニュー', file: 'menu.html', key: 'menu' },
    { name: 'スタッフ', file: 'staff.html', key: 'staff' },
    { name: 'フォト', file: 'photo.html', key: 'photo' },
    { name: 'ギャラリー', file: 'gallery.html', key: 'gallery' },
    { name: 'ブログ', file: 'blog.html', key: 'blog' },
    { name: '口コミ', file: 'review.html', key: 'review' },
    { name: 'アクセス', file: 'access.html', key: 'access' }
];

const getSpecificContent = (key) => {
    switch(key) {
        case 'home':
            return `
        <!-- Main Visual 2-Column -->
        <div class="mv-container">
            <div class="mv-left">
                <img src="images/main_visual.jpg" alt="アポロ整骨院 メインビジュアル" loading="lazy">
            </div>
            <div class="mv-right">
                <div class="mv-catch">
                    4月午前空きあります☆ 【完全個室】 【プライベート空間】 【リラックス】 60分3,600円～本格施術が受けられる
                </div>
                <div class="mv-desc">
                    OLさんや主婦の方に大人気！お買い物ついでに気軽に行けます！首・肩・腰の辛さにお悩みの方にも◎施術後のスッキリ感にヤミツキに♪新しい建物の２階が施術スペース♪清潔感溢れる木目調のお部屋で落ち着いた雰囲気。完全個室で,ゆったりとした気分に☆施術後にハーブティ付き♪全身もみほぐし/足つぼマッサージ/骨盤矯正
                </div>
                <div class="btns-flex" style="display: flex; gap: 10px; margin-top: 20px;">
                    <a href="https://lin.ee/6cYRjnW" class="btn-reserve-brand" style="flex: 1; margin-bottom: 0;">LINEで予約</a>
                    <a href="https://tol-app.jp/s/apollo" class="btn-reserve-net" style="flex: 1;">ネット予約（24h）</a>
                </div>
            </div>
        </div>

        <h2 class="section-title">アポロ整骨院の雰囲気・メニューなど</h2>
        <div class="atmosphere-grid">
            <div class="atmosphere-item">
                <img src="images/sub1.jpg" alt="雰囲気1" loading="lazy">
                <div class="atmosphere-text">完全個室は２階です☆１階奥の内部階段をお上がり下さい♪</div>
            </div>
            <div class="atmosphere-item">
                <img src="images/sub2.jpg" alt="雰囲気2" loading="lazy">
                <div class="atmosphere-text">相談しやすい雰囲気◎その日のお身体状況お知らせください！</div>
            </div>
            <div class="atmosphere-item">
                <img src="images/sub3.jpg" alt="雰囲気3" loading="lazy">
                <div class="atmosphere-text">ご希望の強弱もご遠慮なくお申し付けを！気持ちよく施術♪</div>
            </div>
        </div>

        <h2 class="section-title">アポロ整骨院のこだわり</h2>
        <div style="padding: 10px 0; line-height: 1.8; font-size: 14px;">
            <p>完全個室のプライベート空間で、人目を気にせずゆったりと施術を受けることができます。</p>
            <p>日々の疲れを癒やし、心身ともにリフレッシュしていただけるよう、一人ひとりに合わせた丁寧な施術を心がけております。</p>
        </div>

        <h2 class="section-title">店舗詳細・サロンデータ</h2>
        <table class="hpb-table">
            <tr>
                <th>住所</th>
                <td>埼玉県草加市新善町５１３－１０</td>
            </tr>
            <tr>
                <th>アクセス・道案内</th>
                <td>新田駅西口よりつきあたりを左に行き、進むと信号を右に曲がり進みます。10分ほど真っ直ぐ歩くと新田小学校がありさらに進み信号を渡ると左手に2階建ての建物がありますのでそちらがアポロ整骨院です。</td>
            </tr>
            <tr>
                <th>営業時間</th>
                <td>平日9:00～20:00(最終受付18:30) 【重要】 ※大変申し訳ございませんが当院は待合スペースがないためお子様連れでのご来店をお断りさせて頂きます</td>
            </tr>
            <tr>
                <th>定休日</th>
                <td>土曜・日曜・祝日</td>
            </tr>
            <tr>
                <th>支払い方法</th>
                <td>現金のみ。クレジットカードお取り扱いなし。</td>
            </tr>
            <tr>
                <th>設備</th>
                <td>総数1(完全個室1)</td>
            </tr>
            <tr>
                <th>スタッフ数</th>
                <td>1人</td>
            </tr>
            <tr>
                <th>駐車場</th>
                <td>あり</td>
            </tr>
            <tr>
                <th>こだわり条件</th>
                <td>当日受付OK／個室あり／駐車場あり／2回目以降特典あり／朝10時前でも受付OK／女性スタッフ在籍／完全予約制／1人で貸切OK／ドリンクサービスあり／着替えあり／3席（ベッド）以下の小型サロン／体験メニューあり</td>
            </tr>
            <tr>
                <th>備考</th>
                <td>ご質問等ございましたらお気軽にご連絡ください。</td>
            </tr>
            <tr>
                <th>その他</th>
                <td>メンズにもオススメ</td>
            </tr>
        </table>`;
        case 'menu':
            return `
        <section>
            <h2 class="section-title">限定クーポン</h2>
            <div style="margin-bottom: 30px; text-align: center;">
                <a href="https://tol-app.jp/s/apollo" class="btn-reserve-net" style="display: inline-block; width: 80%; padding: 20px;">【24時間受付】ネット予約はこちら</a>
            </div>
            
            <div class="coupon-item">
                <span class="coupon-type">初回限定</span>
                <div class="coupon-title">【初めての方へ】全身もみほぐし 60分</div>
                <div class="coupon-desc">日頃の疲れをスッキリ解消！熟練の技術で全身を丁寧にほぐします。</div>
                <div class="coupon-footer">
                    <div class="coupon-price">¥3,600</div>
                    <a href="https://lin.ee/6cYRjnW" class="coupon-btn">このクーポンで予約</a>
                </div>
            </div>

            <div class="coupon-item">
                <span class="coupon-type">全員OK</span>
                <div class="coupon-title">【リピート率No.1】全身もみほぐし 90分</div>
                <div class="coupon-desc">特にお疲れの箇所を重点的に。至福のリラックスタイムを。</div>
                <div class="coupon-footer">
                    <div class="coupon-price">¥5,400</div>
                    <div style="display: flex; gap: 10px;">
                        <a href="https://lin.ee/6cYRjnW" class="coupon-btn">LINE予約</a>
                        <a href="https://tol-app.jp/s/apollo" class="coupon-btn" style="background: var(--brand-yellow); color: #333;">ネット予約</a>
                    </div>
                </div>
            </div>

            <h2 class="section-title">通常メニュー</h2>
            <table class="hpb-table">
                <tr>
                    <th>もみほぐし 30分</th>
                    <td>¥2,000</td>
                </tr>
                <tr>
                    <th>もみほぐし 60分</th>
                    <td>¥4,000</td>
                </tr>
                <tr>
                    <th>足つぼ 30分</th>
                    <td>¥2,500</td>
                </tr>
            </table>
        </section>`;
        case 'staff':
            return `
        <section>
            <h2 class="section-title">スタッフ紹介</h2>
            <div class="staff-list">
                <div class="staff-card">
                    <div class="staff-photo">
                        <img src="images/staff_ueno.jpg" alt="上野 ウエノ" loading="lazy">
                    </div>
                    <div class="staff-details">
                        <div class="staff-name">上野 <small>ウエノ</small></div>
                        <div style="font-size: 13px; color: #777; margin: 5px 0 15px;">整体師（歴9年）</div>
                        <div style="font-weight: bold; margin-bottom: 10px;">お待ちしております☆</div>
                        <div style="font-size: 14px; color: #555; line-height: 1.7;">
                            お身体のこと何でもお答えします！お気軽にご質問ください。施術の強弱もご希望をお気軽にお申し付けください♪日々のお疲れやストレス解消のお手伝いをさせていただきます！力強く、安心感のある手でお身体を癒します。
                        </div>
                        <div style="display: flex; gap: 10px; margin-top: 20px;">
                            <a href="https://lin.ee/6cYRjnW" class="btn-reserve-brand" style="flex: 1;">LINEで指名予約</a>
                            <a href="https://tol-app.jp/s/apollo" class="btn-reserve-net" style="flex: 1;">ネットで指名予約</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
        case 'photo':
            return `
        <section>
            <h2 class="section-title">フォト・ギャラリー</h2>
            <div class="atmosphere-grid">
                <div class="atmosphere-item">
                    <img src="images/sub1.jpg" alt="店内1" loading="lazy">
                </div>
                <div class="atmosphere-item">
                    <img src="images/sub2.jpg" alt="店内2" loading="lazy">
                </div>
                <div class="atmosphere-item">
                    <img src="images/sub3.jpg" alt="店内3" loading="lazy">
                </div>
            </div>
            <div style="padding: 60px 0; text-align: center; color: #999;">
                <p>追加の写真は準備中です。</p>
            </div>
        </section>`;
        case 'gallery':
            return `
        <section>
            <h2 class="section-title">施術ギャラリー</h2>
            <div style="padding: 100px 0; text-align: center; color: #999; background: #fafafa; border: 1px solid #eee;">
                <i class="fas fa-camera-retro" style="font-size: 3rem; margin-bottom: 20px; display: block; color: var(--brand-orange);"></i>
                <p>ギャラリーのコンテンツは現在準備中です。</p>
            </div>
        </section>`;
        case 'blog':
            return `
        <section>
            <h2 class="section-title">ブログ</h2>
            <div style="padding: 100px 0; text-align: center; color: #999; background: #fafafa; border: 1px solid #eee;">
                <i class="fas fa-edit" style="font-size: 3rem; margin-bottom: 20px; display: block; color: var(--brand-orange);"></i>
                <p>ブログの更新をお待ちください。</p>
            </div>
        </section>`;
        case 'review':
            return `
        <section>
            <h2 class="section-title">お客様からの口コミ</h2>
            <div class="review-card">
                <div class="review-header">
                    <div class="review-user-info">
                        <i class="fas fa-user-circle"></i> 千春さんさん <span class="review-user-meta">(女性/50代/主婦)</span>
                    </div>
                    <div class="review-date">2025/1/11</div>
                </div>
                <div class="review-rating-row">
                    <span class="stars">★★★★★ 5.0</span>
                    <span>雰囲気 5</span> | <span>接客 5</span> | <span>技術 5</span> | <span>料金 5</span>
                </div>
                <div class="review-content">
今回で３回目の施術でした。
いつもありがとうございます…
しっかり学ばれ資格を持った方の施術なので
痛みの原因や改善方法等のアドバイスも
頂けてとても心強く思っております。
その日の体調によって施術はお任せしております。
それだけ信頼しているとも言えます。
これからも定期的に通って心身ともにリラックス
出来たらと思います。
これからも宜しくお願いします。
                </div>
                <div class="review-reply">
                    <div class="reply-title">オーナーからの返信</div>
                    千春さん様
                    いつもご利用いただきありがとうございます！
                    その日の体調によってお身体の辛さは変わってきますので、お話を伺った上でお任せいただき嬉しいです。今後ともよろしくお願いします！
                </div>
            </div>
        </section>`;
        case 'access':
            return `
        <section>
            <h2 class="section-title">アクセスマップ</h2>
            <div style="margin-bottom: 30px; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.39414246146!2d139.79155!3d35.845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60189156a599b59b%3A0x7d6c555e5c555555!2z44Ki44Od44Ot5pW06aqo6Zmi!5e0!3m2!1sja!2sjp!4v1680000000000!5m2!1sja!2sjp" 
                    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>

            <h2 class="section-title">アクセス詳細</h2>
            <div style="padding: 10px 0; line-height: 1.8; font-size: 14px;">
                <p><strong>【新田駅からお越しの方】</strong></p>
                <p>新田駅西口よりつきあたりを左に行き, 進むと信号を右に曲がり進みます。10分ほど真っ直ぐ歩くと新田小学校がありさらに進み信号を渡ると左手に2階建ての建物がありますのでそちらがアポロ整骨院です。</p>
                <p>※無料駐車場を完備しております。お車でもお気軽にお越しください。</p>
            </div>

            <h2 class="section-title">店舗基本情報</h2>
            <table class="hpb-table">
                <tr>
                    <th>住所</th>
                    <td>埼玉県草加市新善町５１３－１０</td>
                </tr>
                <tr>
                    <th>電話番号</th>
                    <td>048-954-5511</td>
                </tr>
            </table>
        </section>`;
        default:
            return '';
    }
};

const generatePage = (currentPage) => {
    const tabsHtml = pages.map(page => `
                <li class="${page.key === currentPage.key ? 'active' : ''}"><a href="${page.file}">${page.name}</a></li>`).join('');

    return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${currentPage.name}｜アポロ整骨院 公式サイト</title>
    <link rel="stylesheet" href="theme.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

    <header class="g-header">
        <div class="inner">
            <img src="images/logo.png" alt="アポロ整骨院" class="site-logo" loading="lazy">
        </div>
    </header>

    <div class="main-wrap">
        <header class="salon-header">
            <div class="salon-info-left">
                <div class="catchphrase">草加市・新田駅徒歩12分｜完全個室のプライベートサロン</div>
                <h1 class="salon-name">アポロ整骨院</h1>
            </div>
            <div class="salon-actions">
                <a href="https://lin.ee/6cYRjnW" class="btn-reserve-brand">LINEで予約</a>
                <a href="https://tol-app.jp/s/apollo" class="btn-reserve-net">ネット予約（24h）</a>
            </div>
        </header>

        <nav>
            <ul class="tabs-nav">${tabsHtml}
            </ul>
        </nav>

        ${getSpecificContent(currentPage.key)}
    </div>

    <footer class="footer">
        <p>&copy; アポロ整骨院 公式サイト All Rights Reserved.</p>
    </footer>

</body>
</html>`;
};

pages.forEach(page => {
    const content = generatePage(page);
    fs.writeFileSync(path.join(__dirname, page.file), content, { encoding: 'utf8', flag: 'w' });
    console.log(`Generated ${page.file}`);
});
