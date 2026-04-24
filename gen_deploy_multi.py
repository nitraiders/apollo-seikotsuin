import base64
import os

def get_file_content(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def get_file_b64(path):
    with open(path, 'rb') as f:
        return base64.b64encode(f.read()).decode()

base_dir = r'c:\Users\NEC-PCuser\Documents\kazu_midnight_fortress\apollo-seikotsuin'
index_html = get_file_content(os.path.join(base_dir, 'index.html'))
coupon_html = get_file_content(os.path.join(base_dir, 'coupon.html'))
map_html = get_file_content(os.path.join(base_dir, 'map.html'))
theme_css = get_file_content(os.path.join(base_dir, 'theme.css'))
logo_b64 = get_file_b64(os.path.join(base_dir, 'images', 'logo.png'))
mv_b64 = get_file_b64(os.path.join(base_dir, 'images', 'main_visual.jpg'))

php_content = f"""<?php
// Apollo Seikotsuin - Multi-page Deployment Script
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "Starting deployment...<br>";

// Create images directory
if (!is_dir('images')) {{
    mkdir('images', 0755, true);
    echo "Created images directory.<br>";
}}

// Helper function to write files
function writeFile($path, $content) {{
    if (file_put_contents($path, $content) !== false) {{
        echo "Successfully wrote $path (" . strlen($content) . " bytes).<br>";
    }} else {{
        echo "Failed to write $path.<br>";
    }}
}}

// Write HTML/CSS files
writeFile('index.html', {repr(index_html)});
writeFile('coupon.html', {repr(coupon_html)});
writeFile('map.html', {repr(map_html)});
writeFile('theme.css', {repr(theme_css)});

// Write Binary files
writeFile('images/logo.png', base64_decode("{logo_b64}"));
writeFile('images/main_visual.jpg', base64_decode("{mv_b64}"));

echo "Deployment finished. <a href='index.html'>Go to Home</a>";
?>"""

with open(os.path.join(base_dir, 'deploy_multi.php'), 'w', encoding='utf-8') as f:
    f.write(php_content)

print("Generated deploy_multi.php")
