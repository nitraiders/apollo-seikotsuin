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

let phpContent = `<?php
/**
 * deploy_all_8.php - Apollo Seikotsuin 8-Page Deployment Script
 * Brand: Orange & Yellow
 */
error_reporting(E_ALL);
ini_set('display_errors', 1);

$targetDir = __DIR__;
$files = [
`;

filesToDeploy.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath);
        const base64 = content.toString('base64');
        phpContent += `    '${file}' => '${base64}',\n`;
    }
});

phpContent += `];

echo "<h1>Deployment: 8-Page Brand Edition</h1>";
echo "<ul>";

foreach ($files as $filename => $base64Content) {
    $targetPath = $targetDir . '/' . $filename;
    
    // Backup existing if exists
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

echo "</ul>";
echo "<p><strong>Success!</strong> All 8 pages and theme.css have been updated.</p>";
echo '<p><a href="index.html" style="font-size: 20px; font-weight: bold; color: #F39800;">サイトを確認する</a></p>';
?>`;

fs.writeFileSync(path.join(__dirname, 'deploy_all_8.php'), phpContent);
console.log('Created deploy_all_8.php');
