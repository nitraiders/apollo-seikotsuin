const fs = require('fs');
const path = require('path');

const imagesToInclude = [
    "logo.png", "main_visual.jpg", "staff_ueno.jpg", 
    "sub1.jpg", "sub2.jpg", "sub3.jpg"
];

let phpScript = "<?php\n";
phpScript += "if (!is_dir('images')) mkdir('images', 0755, true);\n";

for (const imgname of imagesToInclude) {
    const imgPath = path.join('images', imgname);
    if (fs.existsSync(imgPath)) {
        const b64Content = fs.readFileSync(imgPath).toString('base64');
        phpScript += `file_put_contents('images/${imgname}', base64_decode('${b64Content}'));\n`;
    }
}
phpScript += "echo 'Images deployed';\n";
phpScript += "?>\n";

fs.writeFileSync('deploy_images.php', phpScript);
