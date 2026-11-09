import os
import re
from pathlib import Path

# --- CONFIGURATION ---
PROJECT_ROOT = Path(__file__).parent.parent
DOCS_DIR = PROJECT_ROOT / "src" / "content" / "projects"
OUTPUT_DIR = PROJECT_ROOT / "public"

# Bazowy URL strony (możesz podmienić lub ustawić zmienną środowiskową SITE_URL)
BASE_URL = os.environ.get("SITE_URL", "https://agataryg.github.io")

PROJECT_NAME = "Agata Rygielska | Content Tools Developer & Documentation Engineer"
PROJECT_DESC = "Portfolio of Agata Rygielska, specializing in content tooling, automation, and technical writing architecture."
PROJECT_INTRO = "This file serves as an index of available resources for Language Models (LLMs)."

def parse_frontmatter(text: str) -> tuple[dict, str]:
    """Wyciąga frontmatter YAML oraz treść z pliku MDX."""
    meta = {}
    pattern = r"^---\s*\n(.*?)\n---\s*\n"
    match = re.search(pattern, text, re.DOTALL)
    if match:
        yaml_text = match.group(1)
        # Wyciąganie tytułu
        title_match = re.search(r'title:\s*["\']?([^"\'\n]+)["\']?', yaml_text)
        if title_match:
            meta["title"] = title_match.group(1)
        content = text[match.end():]
        return meta, content
    return meta, text

def clean_html_tags(text: str) -> str:
    """Usuwa znaczniki HTML i klasy Tailwind, zostawiając czytelny tekst dla LLM."""
    text = re.sub(r'<[^>]+>', '', text)
    return re.sub(r'\n\s*\n', '\n\n', text).strip()

def build_llms():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    index_entries = []
    full_sections = []

    # 1. Strona główna
    home_url = f"{BASE_URL}/".rstrip("/") + "/"
    index_entries.append(f"- [Home]({home_url}): Main landing page of the portfolio.")
    full_sections.append(f"# Home\nURL: {home_url}\n\nMain portfolio landing page.")

    # 2. Przeszukiwanie plików MDX w kolekcji projektów
    if DOCS_DIR.exists():
        mdx_files = sorted(list(DOCS_DIR.rglob("*.mdx")) + list(DOCS_DIR.rglob("*.md")))
        print(f"Znaleziono plików projektów: {len(mdx_files)}")

        for file_path in mdx_files:
            slug = file_path.stem
            p_url = f"{BASE_URL}/projects/{slug}"
            
            raw_text = file_path.read_text(encoding="utf-8")
            meta, content = parse_frontmatter(raw_text)
            
            title = meta.get("title", slug.replace("-", " ").title())
            cleaned_body = clean_html_tags(content)

            index_entries.append(f"- [{title}]({p_url})")
            full_sections.append(f"# {title}\nURL: {p_url}\n\n{cleaned_body}")

    # --- ZAPIS llms.txt ---
    llms_txt = [
        f"# {PROJECT_NAME}\n",
        f"> {PROJECT_DESC}\n",
        f"{PROJECT_INTRO}\n",
        "## Projects & Sections\n"
    ]
    llms_txt.extend(index_entries)
    llms_txt.append(f"\n## Full Content\n- [llms-full.txt]({BASE_URL}/llms-full.txt): Complete knowledge base in a single file.\n")

    (OUTPUT_DIR / "llms.txt").write_text("\n".join(llms_txt), encoding="utf-8")
    print("Wygenerowano: public/llms.txt")

    # --- ZAPIS llms-full.txt ---
    llms_full = [
        f"# Complete Archive: {PROJECT_NAME}\n",
        f"> {PROJECT_DESC}\n\n"
    ]
    llms_full.append("\n\n---\n\n".join(full_sections))

    (OUTPUT_DIR / "llms-full.txt").write_text("\n".join(llms_full), encoding="utf-8")
    print("Wygenerowano: public/llms-full.txt")

if __name__ == "__main__":
    build_llms()