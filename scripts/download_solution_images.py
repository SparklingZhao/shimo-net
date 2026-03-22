import hashlib
import os
import re
import urllib.parse
import urllib.request
from pathlib import Path


URLS = [
    "https://shimo.im/firm/samples/manufacturing",
    "https://shimo.im/firm/samples/ecommerce",
    "https://shimo.im/firm/samples/education",
    "https://shimo.im/firm/samples/company",
    "https://shimo.im/firm/samples/productions",
    "https://shimo.im/firm/samples/market",
    "https://shimo.im/firm/samples/hr",
    "https://shimo.im/firm/samples/finance",
    "https://shimo.im/firm/samples/sales",
]

IMG_EXTS = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".bmp", ".avif"}
ROOT = Path("assets/images/solution")


def collect_image_urls(page_url: str, html: str) -> set[str]:
    patterns = [
        r"""(?:src|data-src|data-original|poster)=["']([^"']+)["']""",
        r"""url\(([^)]+)\)""",
        r"""["'](https?://[^"']+?\.(?:png|jpe?g|webp|gif|svg|bmp|avif)(?:\?[^"']*)?)["']""",
    ]
    result = set()
    for pattern in patterns:
        for match in re.findall(pattern, html, flags=re.IGNORECASE):
            url = match.strip().strip("\"' ")
            if not url or url.startswith("data:"):
                continue
            if url.startswith("//"):
                url = "https:" + url
            abs_url = urllib.parse.urljoin(page_url, url)
            parsed = urllib.parse.urlparse(abs_url)
            ext = os.path.splitext(parsed.path)[1].lower()
            if ext in IMG_EXTS:
                result.add(abs_url)
    return result


def safe_filename(url: str, index: int) -> str:
    parsed = urllib.parse.urlparse(url)
    raw = os.path.basename(parsed.path) or f"image_{index}.bin"
    name = urllib.parse.unquote(raw)
    safe = re.sub(r"[^A-Za-z0-9._-]+", "_", name).strip("._")
    if not safe:
        safe = f"image_{index}"
    ext = os.path.splitext(safe)[1].lower()
    if ext not in IMG_EXTS:
        real_ext = os.path.splitext(parsed.path)[1].lower()
        if real_ext in IMG_EXTS:
            safe += real_ext
        else:
            safe += ".img"
    return safe


def main() -> None:
    ROOT.mkdir(parents=True, exist_ok=True)
    opener = urllib.request.build_opener()
    opener.addheaders = [("User-Agent", "Mozilla/5.0")]
    total = 0

    for page_url in URLS:
        slug = urllib.parse.urlparse(page_url).path.rstrip("/").split("/")[-1] or "index"
        target_dir = ROOT / slug
        target_dir.mkdir(parents=True, exist_ok=True)

        try:
            with opener.open(page_url, timeout=12) as response:
                html = response.read().decode("utf-8", "ignore")
        except Exception as exc:
            print(f"[FAIL_PAGE] {page_url} -> {exc}", flush=True)
            continue

        image_urls = sorted(collect_image_urls(page_url, html))
        downloaded = 0
        for i, img_url in enumerate(image_urls, 1):
            filename = safe_filename(img_url, i)
            destination = target_dir / filename
            if destination.exists():
                uniq = hashlib.md5(img_url.encode("utf-8")).hexdigest()[:8]
                stem, suffix = os.path.splitext(filename)
                destination = target_dir / f"{stem}_{uniq}{suffix}"
            try:
                with opener.open(img_url, timeout=8) as img_resp:
                    data = img_resp.read()
                if not data:
                    continue
                destination.write_bytes(data)
                downloaded += 1
                total += 1
            except Exception:
                continue

        print(f"[{slug}] found={len(image_urls)} downloaded={downloaded}", flush=True)

    print(f"TOTAL_DOWNLOADED={total}", flush=True)


if __name__ == "__main__":
    main()
