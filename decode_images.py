import base64
import os

def save_image(txt_file, out_file):
    with open(txt_file, 'r') as f:
        data = f.read().split(',')[-1]
    with open(out_file, 'wb') as f:
        f.write(base64.b64decode(data))

if __name__ == "__main__":
    if not os.path.exists('images'):
        os.makedirs('images')
    save_image('logo_base64.txt', 'images/logo.png')
    save_image('mv_base64.txt', 'images/main_visual.jpg')
    print("Images saved to images/ folder.")
