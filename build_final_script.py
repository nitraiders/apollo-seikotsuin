import os

def get_content(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        return f.read()

def get_b64(filename):
    # Try multiple encodings for the b64 files
    for enc in ['utf-16', 'utf-8', 'shift-jis']:
        try:
            with open(filename, 'r', encoding=enc) as f:
                content = f.read().strip()
                if content:
                    return content
        except:
            continue
    return ""

index_html = get_content('index.html')
theme_css = get_content('theme.css')
logo_b64 = get_b64('logo_b64.txt')
mv_b64 = get_b64('main_visual_b64.txt')

# Escape single quotes in B64 if needed (though we use heredoc)
# Actually heredoc <<<'HTML' doesn't expand variables, so it's safe.

php_content = f"""<?php
/**
 * deploy_final.php
 * アポロ整骨院 サイト公開・一括デプロイスクリプト
 */

error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<pre>";
echo "Starting deployment...\\n";

// 1. index.php のバックアップ
if (file_exists('index.php')) {{
    if (rename('index.php', 'index.php.bak')) {{
        echo "Success: index.php has been renamed to index.php.bak\\n";
    }} else {{
        echo "Error: Failed to rename index.php\\n";
    }}
}}

// 2. index.html の生成
$index_html = <<<'HTML'
{index_html}
HTML;
if (file_put_contents('index.html', $index_html)) {{
    echo "Success: index.html has been generated.\\n";
}} else {{
    echo "Error: Failed to write index.html\\n";
}}

// 3. theme.css の生成
$theme_css = <<<'CSS'
{theme_css}
CSS;
if (file_put_contents('theme.css', $theme_css)) {{
    echo "Success: theme.css has been generated.\\n";
}} else {{
    echo "Error: Failed to write theme.css\\n";
}}

// 4. images ディレクトリの作成
if (!is_dir('images')) {{
    if (mkdir('images', 0755, true)) {{
        echo "Success: images directory created.\\n";
    }} else {{
        echo "Error: Failed to create images directory\\n";
    }}
}}

// 5. 画像のデコードと保存
$images = [
    'images/logo.png' => '{logo_b64}',
    'images/main_visual.jpg' => '{mv_b64}'
];

foreach ($images as $path => $b64) {{
    if (empty($b64)) {{
        echo "Warning: No data for $path\\n";
        continue;
    }}
    if (file_put_contents($path, base64_decode($b64))) {{
        echo "Success: $path has been generated.\\n";
    }} else {{
        echo "Error: Failed to write $path\\n";
    }}
}}

echo "\\n<b>Deployment Completed!</b>\\n";
echo '<a href="index.html" style="display:inline-block;padding:10px 20px;background:#1b3d18;color:#fff;text-decoration:none;border-radius:5px;margin-top:20px;">サイトを確認する</a>';
echo "</pre>";
?>
"""

with open('deploy_final.php', 'w', encoding='utf-8') as f:
    f.write(php_content)

print("Generated deploy_final.php")
