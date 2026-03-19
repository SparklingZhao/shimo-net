# -*- coding: utf-8 -*-
"""
将 assets/images/banner 下三张图片的背景处理为透明，输出到同目录并覆盖原图。
依赖: pip install rembg pillow
"""
from pathlib import Path

from rembg import remove
from PIL import Image

BANNER_DIR = Path(__file__).resolve().parent.parent / "assets" / "images" / "banner"
IMAGES = ["sdk-banner.png", "suite-banner1.png", "suite-banner2.png"]


def main():
    for name in IMAGES:
        path = BANNER_DIR / name
        if not path.exists():
            print(f"跳过（不存在）: {path}")
            continue
        print(f"处理: {name}")
        with Image.open(path) as img:
            out = remove(img)
        out.save(path, "PNG")
        print(f"  已保存: {path}")
    print("完成。")


if __name__ == "__main__":
    main()
