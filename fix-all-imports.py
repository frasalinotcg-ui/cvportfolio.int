#!/usr/bin/env python3
"""
Script per rimuovere le versioni dagli import in tutti i file .tsx
Eseguire: python3 fix-all-imports.py
"""

import re
import glob
from pathlib import Path

# Pattern per trovare import con versioni
PATTERNS = [
    (r'@radix-ui/react-(\w+)@[\d\.]+', r'@radix-ui/react-\1'),
    (r'lucide-react@[\d\.]+', r'lucide-react'),
    (r'class-variance-authority@[\d\.]+', r'class-variance-authority'),
    (r'sonner@[\d\.]+', r'sonner'),
    (r'next-themes@[\d\.]+', r'next-themes'),
    (r'cmdk@[\d\.]+', r'cmdk'),
    (r'react-day-picker@[\d\.]+', r'react-day-picker'),
    (r'embla-carousel-react@[\d\.]+', r'embla-carousel-react'),
    (r'input-otp@[\d\.]+', r'input-otp'),
    (r'react-resizable-panels@[\d\.]+', r'react-resizable-panels'),
    (r'vaul@[\d\.]+', r'vaul'),
]

def fix_imports(file_path):
    """Rimuove le versioni dagli import in un file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Applica tutti i pattern
    for pattern, replacement in PATTERNS:
        content = re.sub(pattern, replacement, content)
    
    # Scrivi solo se è cambiato qualcosa
    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    print("🔧 Rimozione versioni dagli import...")
    
    # Trova tutti i file .tsx in components/ui
    files = glob.glob('components/ui/*.tsx')
    
    fixed_count = 0
    for file_path in files:
        if fix_imports(file_path):
            print(f"  ✅ {file_path}")
            fixed_count += 1
    
    print(f"\n✨ Completato! {fixed_count} file corretti.")
    print("\nOra esegui:")
    print("  npm run build")

if __name__ == '__main__':
    main()
