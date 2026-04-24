const fs = require('fs');
const path = require('path');

const filesToInclude = [
    "index.html", "access.html", "blog.html", "coupon.html", 
    "gallery.html", "map.html", "menu.html", "photo.html", 
    "review.html", "staff.html", "success.html", "theme.css"
];

const imagesToInclude = [
    "logo.png", "main_visual.jpg", "staff_ueno.jpg", 
    "sub1.jpg", "sub2.jpg", "sub3.jpg"
];

let phpScript = "<?php\n";
phpScript += "header('Content-Type: text/plain; charset=utf-8');\n";
phpScript += "echo \"Starting deployment...\\n\";\n\n";

phpScript += "if (!is_dir('images')) {\n";
phpScript += "    mkdir('images', 0755, true);\n";
phpScript += "    echo \"Created images directory.\\n\";\n";
phpScript += "}\n\n";

for (const filename of filesToInclude) {
    if (fs.existsSync(filename)) {
        const content = fs.readFileSync(filename, 'utf8');
        const escapedContent = content
            .replace(/\\/g, '\\\\')
            .replace(/'/g, "\\'")
            .replace(/\$/g, '\\$');
        phpScript += `file_put_contents('${filename}', '${escapedContent}');\n`;
        phpScript += `echo "Deployed ${filename}.\\n";\n`;
    }
}

for (const imgname of imagesToInclude) {
    const imgPath = path.join('images', imgname);
    if (fs.existsSync(imgPath)) {
        const b64Content = fs.readFileSync(imgPath).toString('base64');
        phpScript += `file_put_contents('images/${imgname}', base64_decode('${b64Content}'));\n`;
        phpScript += `echo "Deployed images/${imgname}.\\n";\n`;
    }
}

phpScript += "echo \"\\nDeployment complete!\\n\";\n";
phpScript += "?>\n";

fs.writeFileSync('deploy_all.php', phpScript);
console.log("deploy_all.php generated successfully.");
