#!/bin/bash

# Script per rimuovere le versioni dagli import in tutti i file .tsx
# Eseguire dalla root del progetto: bash fix-imports.sh

echo "🔧 Rimozione versioni dagli import..."

# Array di pacchetti da correggere
packages=(
  "@radix-ui/react-accordion"
  "@radix-ui/react-alert-dialog"
  "@radix-ui/react-aspect-ratio"
  "@radix-ui/react-avatar"
  "@radix-ui/react-checkbox"
  "@radix-ui/react-collapsible"
  "@radix-ui/react-context-menu"
  "@radix-ui/react-dialog"
  "@radix-ui/react-dropdown-menu"
  "@radix-ui/react-hover-card"
  "@radix-ui/react-label"
  "@radix-ui/react-menubar"
  "@radix-ui/react-navigation-menu"
  "@radix-ui/react-popover"
  "@radix-ui/react-progress"
  "@radix-ui/react-radio-group"
  "@radix-ui/react-scroll-area"
  "@radix-ui/react-select"
  "@radix-ui/react-separator"
  "@radix-ui/react-slider"
  "@radix-ui/react-slot"
  "@radix-ui/react-switch"
  "@radix-ui/react-tabs"
  "@radix-ui/react-toast"
  "@radix-ui/react-toggle"
  "@radix-ui/react-toggle-group"
  "@radix-ui/react-tooltip"
  "lucide-react"
  "class-variance-authority"
  "sonner"
  "next-themes"
  "cmdk"
  "react-day-picker"
  "embla-carousel-react"
  "input-otp"
  "react-resizable-panels"
  "vaul"
)

# Trova tutti i file .tsx in components/ui
find components/ui -name "*.tsx" -type f | while read -r file; do
  echo "  Correzione: $file"
  
  # Per ogni pacchetto, rimuovi la versione
  for pkg in "${packages[@]}"; do
    # Escape dei caratteri speciali per sed
    pkg_escaped=$(echo "$pkg" | sed 's/[\/&@]/\\&/g')
    
    # Sostituisci pacchetto@version con solo pacchetto
    sed -i.bak -E "s/${pkg_escaped}@[0-9]+\.[0-9]+\.[0-9]+/${pkg}/g" "$file"
  done
  
  # Rimuovi il backup
  rm -f "${file}.bak"
done

echo "✅ Fatto! Tutti gli import sono stati corretti."
echo ""
echo "Ora esegui:"
echo "  npm run build"
