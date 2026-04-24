import base64
import os

images = ['logo.png', 'main_visual.jpg', 'sub1.jpg', 'sub2.jpg', 'sub3.jpg', 'staff_ueno.jpg']
html_files = ['index.html', 'theme.css', 'map.html', 'coupon.html', 'staff.html', 'review.html']

php_script = "<?php\n"
php_script += "if (!is_dir('images')) mkdir('images', 0755, true);\n"

for img in images:
    path = os.path.join('images', img)
    if os.path.exists(path):
        with open(path, 'rb') as f:
            b64 = base64.b64encode(f.read()).decode('utf-8')
            php_script += f"file_put_contents('images/{img}', base64_decode('{b64}'));\n"
            php_script += f"echo 'Restored images/{img}\\n';\n"

for html in html_files:
    if os.path.exists(html):
        with open(html, 'r', encoding='utf-8') as f:
            content = f.read()
            # Escape single quotes and backslashes for PHP heredoc or string
            # Using heredoc is safer for large blocks
            php_script += f"$content_{html.replace('.', '_')} = <<<'HTML'\n{content}\nHTML;\n"
            php_script += f"file_put_contents('{html}', $content_{html.replace('.', '_')});\n"
            php_script += f"echo 'Restored {html}\\n';\n"

php_script += "unlink(__FILE__);\n"
php_script += "echo 'Done and self-deleted.';\n"
php_script += "?>"

with open('restore_everything.php', 'w', encoding='utf-8') as f:
    f.write(php_script)
