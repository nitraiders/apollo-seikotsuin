$logo_b64 = (Get-Content -Path "logo_b64.txt" -Raw).Trim()
$mv_b64 = (Get-Content -Path "main_visual_b64.txt" -Raw).Trim()

$php_logo_content = @"
<?php
/**
 * deploy_logo.php
 * images/logo.png を生成するスクリプト
 */

$dir = 'images';
if (!is_dir($dir)) {
    mkdir($dir, 0755, true);
}

`$b64_data = '$logo_b64';
`$img_data = base64_decode(`$b64_data);

if (file_put_contents('images/logo.png', `$img_data)) {
    echo "Success: images/logo.png has been generated.";
} else {
    echo "Error: Failed to write images/logo.png.";
}
?>
"@

$php_mv_content = @"
<?php
/**
 * deploy_mv.php
 * images/main_visual.jpg を生成するスクリプト
 */

$dir = 'images';
if (!is_dir($dir)) {
    mkdir($dir, 0755, true);
}

`$b64_data = '$mv_b64';
`$img_data = base64_decode(`$b64_data);

if (file_put_contents('images/main_visual.jpg', `$img_data)) {
    echo "Success: images/main_visual.jpg has been generated.";
} else {
    echo "Error: Failed to write images/main_visual.jpg.";
}
?>
"@

[System.IO.File]::WriteAllText("$(Get-Location)\deploy_logo.php", $php_logo_content, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText("$(Get-Location)\deploy_mv.php", $php_mv_content, [System.Text.Encoding]::UTF8)

Write-Host "Generated deploy_logo.php and deploy_mv.php"
