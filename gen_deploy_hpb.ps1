$indexHtml = [System.IO.File]::ReadAllText("$(Get-Location)\index.html", [System.Text.Encoding]::UTF8)
$themeCss = [System.IO.File]::ReadAllText("$(Get-Location)\theme.css", [System.Text.Encoding]::UTF8)

$php = @"
<?php
// deploy_hpb.php - HPB Style Deployment
error_reporting(E_ALL);
ini_set('display_errors', 1);

`$targetDir = __DIR__;
`$indexFile = `$targetDir . '/index.html';
`$cssFile = `$targetDir . '/theme.css';
`$backupDir = `$targetDir . '/backup_' . date('Ymd_His');

if (!is_dir(`$backupDir)) {
    mkdir(`$backupDir, 0755, true);
}

// Backup existing
if (file_exists(`$indexFile)) rename(`$indexFile, `$backupDir . '/index.html');
if (file_exists(`$cssFile)) rename(`$cssFile, `$backupDir . '/theme.css');

// Write new files
`$htmlContent = base64_decode('$( [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($indexHtml)) )');
`$cssContent = base64_decode('$( [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($themeCss)) )');

file_put_contents(`$indexFile, `$htmlContent);
file_put_contents(`$cssFile, `$cssContent);

echo "<h1>Deployment Success (HPB Style)</h1>";
echo "<p>index.html and theme.css have been updated.</p>";
echo "<p>Backup created in: " . `$backupDir . "</p>";
echo '<p><a href="index.html">View Site</a></p>';
?>
"@

[System.IO.File]::WriteAllText("$(Get-Location)\deploy_hpb.php", $php, [System.Text.Encoding]::UTF8)
Write-Host "deploy_hpb.php generated."
