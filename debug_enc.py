import os
filename = 'logo_b64.txt'
for enc in ['utf-16', 'utf-8', 'shift-jis']:
    try:
        with open(filename, 'r', encoding=enc) as f:
            content = f.read().strip()
            print(f"Encoding {{enc}}: success, length {{len(content)}}")
            break
    except Exception as e:
        print(f"Encoding {{enc}}: failed - {{e}}")
