const fs = require('fs');
const path = require('path');

const filesToDeploy = [
    'index.html',
    'menu.html',
    'staff.html',
    'photo.html',
    'gallery.html',
    'blog.html',
    'review.html',
    'access.html',
    'theme.css'
];

const deployScriptPath = path.join(__dirname, 'deploy_all_8.php');

let filesJson = {};

filesToDeploy.forEach(file => {
    const content = fs.readFileSync(path.join(__dirname, file));
    filesJson[file] = content.toString('base64');
});

const scriptContent = `<?php
/**
 * deploy_all_8.php - Emergency Restore Script
 * Brand: Orange & Yellow
 */
error_reporting(E_ALL);
ini_set('display_errors', 1);

$targetDir = __DIR__;
$files = ${JSON.stringify(filesJson, null, 4)};

echo "<h1>Emergency Deployment: Apollo Seikotsuin</h1>";
echo "<ul>";

foreach ($files as $filename => $base64Content) {
    $targetPath = $targetDir . '/' . $filename;
    
    // Backup existing
    if (file_exists($targetPath)) {
        $backupPath = $targetDir . '/backup_' . $filename . '_' . date('Ymd_His');
        copy($targetPath, $backupPath);
    }
    
    // Write new content
    if (file_put_contents($targetPath, base64_decode($base64Content)) !== false) {
        echo "<li>✅ Updated: <strong>$filename</strong></li>";
    } else {
        echo "<li>❌ Error: Failed to write $filename</li>";
    }
}

// Security: Delete index.php if it exists to prevent conflicts
if (file_exists($targetDir . '/index.php') && !strpos($_SERVER['PHP_SELF'], 'index.php')) {
    unlink($targetDir . '/index.php');
    echo "<li>⚠️ Deleted index.php to prevent conflict.</li>";
}

echo "</ul>";
echo "<p><strong>Success!</strong> All pages have been restored to pure HTML.</p>";
echo '<p><a href="index.html" style="font-size: 24px; font-weight: bold; color: #F39800;">[ サイトを確認する ]</a></p>';
?>`;

fs.writeFileSync(deployScriptPath, scriptContent);
console.log('Updated deploy_all_8.php with current files.');
