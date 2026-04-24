import os
import base64

files_to_include = [
    "index.html", "access.html", "blog.html", "coupon.html", 
    "gallery.html", "map.html", "menu.html", "photo.html", 
    "review.html", "staff.html", "success.html", "theme.css"
]

images_to_include = [
    "logo.png", "main_visual.jpg", "staff_ueno.jpg", 
    "sub1.jpg", "sub2.jpg", "sub3.jpg"
]

php_script = "<?php\n"
php_script += "header('Content-Type: text/plain; charset=utf-8');\n"
php_script += "echo \"Starting deployment...\\n\";\n\n"

php_script += "if (!is_dir('images')) {\n"
php_script += "    mkdir('images', 0755, true);\n"
php_script += "    echo \"Created images directory.\\n\";\n"
php_script += "}\n\n"

for filename in files_to_include:
    if os.path.exists(filename):
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                content = f.read()
        except UnicodeDecodeError:
            with open(filename, 'r', encoding='shift-jis') as f:
                content = f.read()
        
        escaped_content = content.replace('\\', '\\\\').replace('\'', '\\\'').replace('$', '\\$')
        php_script += f"file_put_contents('{filename}', '{escaped_content}');\n"
        php_script += f"echo \"Deployed {filename}.\\n\";\n"

for imgname in images_to_include:
    img_path = os.path.join('images', imgname)
    if os.path.exists(img_path):
        with open(img_path, 'rb') as f:
            b64_content = base64.b64encode(f.read()).decode('utf-8')
            php_script += f"file_put_contents('images/{imgname}', base64_decode('{b64_content}'));\n"
            php_script += f"echo \"Deployed images/{imgname}.\\n\";\n"

php_script += "echo \"\\nDeployment complete!\\n\";\n"
php_script += "?>\n"

with open('deploy_all.php', 'w', encoding='utf-8') as f:
    f.write(php_script)

print("deploy_all.php generated successfully.")
