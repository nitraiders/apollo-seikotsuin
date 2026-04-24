$index_html = Get-Content -Path "index.html" -Raw
$theme_css = Get-Content -Path "theme.css" -Raw
$logo_b64 = (Get-Content -Path "logo_b64.txt" -Raw).Trim()
$mv_b64 = (Get-Content -Path "main_visual_b64.txt" -Raw).Trim()

$php_template = @'
<?php
/**
 * deploy_final.php
 * アポロ整骨院 サイト公開・一括デプロイスクリプト
 */

error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<pre>";
echo "Starting deployment...\n";

// 1. index.php のバックアップ
if (file_exists('index.php')) {
    if (rename('index.php', 'index.php.bak')) {
        echo "Success: index.php has been renamed to index.php.bak\n";
    } else {
        echo "Error: Failed to rename index.php\n";
    }
}

// 2. index.html の生成
$index_html = <<<'HTML'
{INDEX_HTML_CONTENT}
HTML;
if (file_put_contents('index.html', $index_html)) {
    echo "Success: index.html has been generated.\n";
} else {
    echo "Error: Failed to write index.html\n";
}

// 3. theme.css の生成
$theme_css = <<<'CSS'
{THEME_CSS_CONTENT}
CSS;
if (file_put_contents('theme.css', $theme_css)) {
    echo "Success: theme.css has been generated.\n";
} else {
    echo "Error: Failed to write theme.css\n";
}

// 4. images ディレクトリの作成
if (!is_dir('images')) {
    if (mkdir('images', 0755, true)) {
        echo "Success: images directory created.\n";
    } else {
        echo "Error: Failed to create images directory\n";
    }
}

// 5. 画像のデコードと保存
$images = [
    'images/logo.png' => '{LOGO_B64_CONTENT}',
    'images/main_visual.jpg' => '{MV_B64_CONTENT}'
];

foreach ($images as $path => $b64) {
    if (empty($b64)) {
        echo "Warning: No data for $path\n";
        continue;
    }
    if (file_put_contents($path, base64_decode($b64))) {
        echo "Success: $path has been generated.\n";
    } else {
        echo "Error: Failed to write $path\n";
    }
}

echo "\n<b>Deployment Completed!</b>\n";
echo '<a href="index.html" style="display:inline-block;padding:10px 20px;background:#1b3d18;color:#fff;text-decoration:none;border-radius:5px;margin-top:20px;">サイトを確認する</a>';
echo "</pre>";
?>
'@

$php_final = $php_template.Replace('{INDEX_HTML_CONTENT}', $index_html)
$php_final = $php_final.Replace('{THEME_CSS_CONTENT}', $theme_css)
$php_final = $php_final.Replace('{LOGO_B64_CONTENT}', $logo_b64)
$php_final = $php_final.Replace('{MV_B64_CONTENT}', $mv_b64)

[System.IO.File]::WriteAllText("$(Get-Location)\deploy_final.php", $php_final, [System.Text.Encoding]::UTF8)
Write-Host "Generated deploy_final.php"
