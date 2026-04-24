# gen_index_utf8.py - Generate index.html with embedded Base64 images (UTF-8 no BOM)
import os

script_dir = os.path.dirname(os.path.abspath(__file__))

# Read Base64 data
with open(os.path.join(script_dir, 'logo_b64.txt'), 'r', encoding='utf-8') as f:
    logo_b64 = f.read().strip()

with open(os.path.join(script_dir, 'main_visual_b64.txt'), 'r', encoding='utf-8') as f:
    mv_b64 = f.read().strip()

print(f"Logo Base64 length: {len(logo_b64)}")
print(f"MV Base64 length: {len(mv_b64)}")

html = f'''<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="草加市のアポロ整骨院。完全個室のプライベート空間でリラックス。全身マッサージ60分3,600円〜。">
    <title>アポロ整骨院 | 草加市のマッサージ・整体</title>
    <link rel="stylesheet" href="theme.css">
</head>
<body>
    <header class="header container">
        <img src="data:image/png;base64,{logo_b64}" alt="アポロ整骨院" class="header__logo">
    </header>

    <main class="container">
        <div class="catchphrase">
            4月午前空きあります☆ 【完全個室】 【プライベート空間】 【リラックス】 60分3,600円〜
        </div>

        <div class="main-visual">
            <img src="data:image/jpeg;base64,{mv_b64}" alt="メインビジュアル">
        </div>

        <section class="section-card">
            <h2 class="section-title">基本情報</h2>
            <ul class="info-list">
                <li><span class="label">住所</span> 埼玉県草加市新善町513-10</li>
                <li><span class="label">アクセス</span> 新田駅から徒歩12分、バス停角屋橋バス停目の前</li>
                <li><span class="label">営業時間</span> 平日 9:00〜20:00（最終受付 19:30）</li>
                <li><span class="label">定休日</span> 土曜・日曜・祝日</li>
            </ul>
        </section>

        <section class="section-card">
            <h2 class="section-title">メニュー表</h2>
            <table class="menu-table">
                <thead>
                    <tr>
                        <th style="text-align:left; color:#999; font-size:0.8rem;">メニュー名</th>
                        <th style="text-align:right; color:#999; font-size:0.8rem;">価格(税込)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><th>全身マッサージ 60分</th><td>¥3,600</td></tr>
                    <tr><th>全身マッサージ 90分</th><td>¥5,400</td></tr>
                    <tr><th>全身マッサージ 30分</th><td>¥2,200</td></tr>
                </tbody>
            </table>
        </section>

        <section class="section-card">
            <h2 class="section-title">こだわりポイント</h2>
            <p>アポロ整骨院では、完全個室のプライベート空間をご用意。周りを気にせず、心ゆくまでリラックスしていただける環境を整えております。日々の疲れをリセットしに、ぜひお越しください。</p>
        </section>
    </main>

    <div class="action-bar">
        <a href="tel:048-954-5511" class="action-bar__btn action-bar__btn--tel">電話予約</a>
        <a href="https://lin.ee/6cYRjnW" class="action-bar__btn action-bar__btn--line">LINE予約</a>
    </div>
</body>
</html>'''

output_path = os.path.join(script_dir, 'index.html')
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html)

file_size = os.path.getsize(output_path)
print(f"index.html generated successfully.")
print(f"File size: {file_size} bytes")
print(f"Encoding: UTF-8 (no BOM)")

# Verify: read back and check first chars
with open(output_path, 'rb') as f:
    first3 = f.read(3)
    if first3 == b'\xef\xbb\xbf':
        print("WARNING: BOM detected!")
    else:
        print(f"First 3 bytes: {first3[0]} {first3[1]} {first3[2]} - No BOM, correct!")

# Verify Japanese text
with open(output_path, 'r', encoding='utf-8') as f:
    content = f.read()
    if 'アポロ整骨院' in content and '草加市' in content and '基本情報' in content:
        print("Japanese text verification: PASS")
    else:
        print("Japanese text verification: FAIL - mojibake detected!")
