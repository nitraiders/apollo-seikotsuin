import base64
import os

def create_php_script(target_php, target_image_path, b64_file):
    with open(b64_file, 'r') as f:
        b64_data = f.read().strip()
    
    php_content = f"""<?php
/**
 * {target_php}
 * {target_image_path} を生成するスクリプト
 */

$dir = 'images';
if (!is_dir($dir)) {{
    mkdir($dir, 0755, true);
}}

$b64_data = '{b64_data}';
$img_data = base64_decode($b64_data);

if (file_put_contents('{target_image_path}', $img_data)) {{
    echo "Success: {target_image_path} has been generated.";
}} else {{
    echo "Error: Failed to write {target_image_path}.";
}}
?>"""
    
    with open(target_php, 'w', encoding='utf-8') as f:
        f.write(php_content)
    print(f"Generated {target_php}")

if __name__ == "__main__":
    create_php_script('deploy_logo.php', 'images/logo.png', 'logo_b64.txt')
    create_php_script('deploy_mv.php', 'images/main_visual.jpg', 'main_visual_b64.txt')
