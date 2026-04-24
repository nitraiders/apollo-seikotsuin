$index_html = Get-Content -Path "index.html" -Raw
$theme_css = Get-Content -Path "theme.css" -Raw
$logo_b64 = (Get-Content -Path "logo_b64.txt" -Encoding Unicode -Raw).Trim()
$mv_b64 = (Get-Content -Path "main_visual_b64.txt" -Encoding Unicode -Raw).Trim()

$header = @"
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
echo "<pre>Starting deployment...\n";

if (file_exists('index.php')) {
    if (rename('index.php', 'index.php.bak')) {
        echo "Success: index.php -> index.php.bak\n";
    }
}

\$html_content = <<<'HTML'
$index_html
HTML;
file_put_contents('index.html', \$html_content);
echo "Success: index.html generated\n";

\$css_content = <<<'CSS'
$theme_css
CSS;
file_put_contents('theme.css', \$css_content);
echo "Success: theme.css generated\n";

if (!is_dir('images')) mkdir('images', 0755, true);

\$images = [
"@

$footer = @"
];

foreach (\$images as \$path => \$b64) {
    if (empty(\$b64)) {
        echo "Error: No data for \$path\n";
        continue;
    }
    if (file_put_contents(\$path, base64_decode(\$b64))) {
        echo "Success: \$path generated (" . strlen(base64_decode(\$b64)) . " bytes)\n";
    } else {
        echo "Error: Failed to write \$path\n";
    }
}

echo "\n<b>Deployment Complete!</b>\n";
echo '<a href="index.html" style="display:inline-block;padding:10px 20px;background:#1b3d18;color:#fff;text-decoration:none;border-radius:5px;margin-top:20px;">サイトを確認する</a>';
echo "</pre>";
?>
"@

$sw = New-Object System.IO.StreamWriter("$(Get-Location)\deploy_final.php", $false, [System.Text.Encoding]::UTF8)
$sw.Write($header)
$sw.Write("    'images/logo.png' => '$logo_b64',`n")
$sw.Write("    'images/main_visual.jpg' => '$mv_b64'`n")
$sw.Write($footer)
$sw.Close()

Write-Host "Generated deploy_final.php successfully with UTF16 encoding fix."
