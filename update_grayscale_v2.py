import os
import re

path = r'src/pages/curso/filosofia/antiga'
count = 0

def replace_grayscale(match):
    prefix = match.group(1)
    suffix = match.group(2)
    
    # If it already has a prefix, keep it
    if prefix:
        return f"{prefix}grayscale{suffix if suffix else ''}"
    
    # If it is grayscale-0, keep it
    if suffix == '-0':
        return "grayscale-0"
    
    # Otherwise, add md: prefix
    return "md:grayscale"

# Pattern matches optional prefix, word grayscale, and optional -0
pattern = re.compile(r'(md:|lg:|group-hover:)?\bgrayscale(-0)?\b')

for root, dirs, files in os.walk(path):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = pattern.sub(replace_grayscale, content)
            
            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
                count += 1

print(f"Total files updated: {count}")
