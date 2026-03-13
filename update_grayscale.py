import os
import re

path = r'src/pages/curso/filosofia/antiga'
count = 0

for root, dirs, files in os.walk(path):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace grayscale with md:grayscale if not already prefixed
            new_content = re.sub(r'(?<!md:|lg:|group-hover:)\bgrayscale\b', 'md:grayscale', content)
            
            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
                count += 1

print(f"Total files updated: {count}")
