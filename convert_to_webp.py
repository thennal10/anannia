#Simple python script for converting images to webp. Give path to dir as argument.

import sys
import os
import subprocess

files = list(os.scandir(sys.argv[1]))
filenames = [f.name for f in files]

for file in files:
    if file.name.endswith(('jpg', 'png')):
        if f"{file.name[:-3]}webp" not in filenames:
            subprocess.run(['cwebp', '-q', '80', file.path, '-o', f'{file.path[:-3]}webp'])

