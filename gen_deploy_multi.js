// gen_deploy_multi.js - Generate a single PHP script to deploy all files
const fs = require('fs');
const path = require('path');

const scriptDir = __dirname;

function getB64(file) {
    return fs.readFileSync(file).toString('base64');
}

const files = {
    'index.html': getB64(path.join(scriptDir, 'index.html')),
    'coupon.html': getB64(path.join(scriptDir, 'coupon.html')),
    'map.html': getB64(path.join(scriptDir, 'map.html')),
    'theme.css': getB64(path.join(scriptDir, 'theme.css')),
    'images/logo.png': getB64(path.join(scriptDir, 'images', 'logo.png')),
    'images/main_visual.jpg': getB64(path.join(scriptDir, 'images', 'main_visual.jpg'))
};

const php = `<?php
// deploy_multi.php - Multi-page Deployment Script
error_reporting(E_ALL);
ini_set('display_errors', 1);

$files = ${JSON.stringify(files, null, 4)};

foreach ($files as $name => $b64) {
    $path = __DIR__ . '/' . $name;
    $dir = dirname($path);
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
    file_put_contents($path, base64_decode($b64));
    echo "Deployed: $name<br>";
}

echo "<h1>Deployment Complete!</h1>";
echo "<a href='index.html'>Go to Site</a>";
?>`;

fs.writeFileSync(path.join(scriptDir, 'deploy_multi.php'), php, 'utf8');
console.log('deploy_multi.php generated.');
