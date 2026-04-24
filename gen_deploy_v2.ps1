$index_html = Get-Content -Path "index.html" -Raw
$theme_css = Get-Content -Path "theme.css" -Raw

$header = @"
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// 既存のファイルをバックアップ
if (file_exists('index.php') && !file_exists('index.php.bak')) {
    rename('index.php', 'index.php.bak');
}

// index.html を生成（画像埋め込み済み）
\$html_content = <<<'HTML'
"@

$middle = @"
HTML;
file_put_contents('index.html', \$html_content);

// theme.css を生成
\$css_content = <<<'CSS'
"@

$footer = @"
CSS;
file_put_contents('theme.css', \$css_content);

echo "<h1>Apollo Seikotsuin - Deployment v2 Success</h1>";
echo "<p>Site has been updated with HPB visual reproduction.</p>";
echo "<a href='/'>Go to Home</a>";
?>
"@

$sw = New-Object System.IO.StreamWriter("$(Get-Location)\deploy_final_v2.php", $false, [System.Text.Encoding]::UTF8)
$sw.Write($header)
$sw.Write($index_html)
$sw.Write("`n")
$sw.Write($middle)
$sw.Write($theme_css)
$sw.Write("`n")
$sw.Write($footer)
$sw.Close()

Write-Host "deploy_final_v2.php generated successfully."
