# gen_index_utf8.ps1 - Generate index.html with embedded Base64 images (UTF-8 no BOM)
$ErrorActionPreference = "Stop"

# Read Base64 data as UTF-8
$logo_b64 = [System.IO.File]::ReadAllText("$(Get-Location)\logo_b64.txt", [System.Text.Encoding]::UTF8).Trim()
$mv_b64 = [System.IO.File]::ReadAllText("$(Get-Location)\main_visual_b64.txt", [System.Text.Encoding]::UTF8).Trim()

Write-Host "Logo Base64 length: $($logo_b64.Length)"
Write-Host "MV Base64 length: $($mv_b64.Length)"

$html = @"
<!DOCTYPE html>
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
        <img src="data:image/png;base64,$logo_b64" alt="アポロ整骨院" class="header__logo">
    </header>

    <main class="container">
        <div class="catchphrase">
            4月午前空きあります☆ 【完全個室】 【プライベート空間】 【リラックス】 60分3,600円〜
        </div>

        <div class="main-visual">
            <img src="data:image/jpeg;base64,$mv_b64" alt="メインビジュアル">
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
</html>
"@

# Write as UTF-8 WITHOUT BOM
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText("$(Get-Location)\index.html", $html, $utf8NoBom)

$fileInfo = Get-Item "$(Get-Location)\index.html"
Write-Host "index.html generated successfully."
Write-Host "File size: $($fileInfo.Length) bytes"
Write-Host "Encoding: UTF-8 (no BOM)"
