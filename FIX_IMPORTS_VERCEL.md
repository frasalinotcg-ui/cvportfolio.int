# 🚨 FIX IMPORTS VERCEL - SOLUZIONE DEFINITIVA

## Problema
I componenti UI usano import con versioni specificate (es. `lucide-react@0.487.0`) che funzionano solo in Figma Make, ma NON in build Vite/TypeScript standard.

## ✅ File GIÀ Corretti
- select.tsx
- separator.tsx
- sheet.tsx
- sidebar.tsx
- slider.tsx
- sonner.tsx
- switch.tsx
- tabs.tsx
- toggle.tsx
- toggle-group.tsx
- tooltip.tsx

## ⚠️ File DA Correggere (30 rimanenti)
accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb, button, calendar, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input-otp, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area

---

## SOLUZIONE RAPIDA: Script Node.js

### 1. Crea `/fix-imports.js`:

```javascript
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Pattern da sostituire
const replacements = [
  [/@radix-ui\/react-accordion@[\d.]+/g, '@radix-ui/react-accordion'],
  [/@radix-ui\/react-alert-dialog@[\d.]+/g, '@radix-ui/react-alert-dialog'],
  [/@radix-ui\/react-aspect-ratio@[\d.]+/g, '@radix-ui/react-aspect-ratio'],
  [/@radix-ui\/react-avatar@[\d.]+/g, '@radix-ui/react-avatar'],
  [/@radix-ui\/react-checkbox@[\d.]+/g, '@radix-ui/react-checkbox'],
  [/@radix-ui\/react-collapsible@[\d.]+/g, '@radix-ui/react-collapsible'],
  [/@radix-ui\/react-context-menu@[\d.]+/g, '@radix-ui/react-context-menu'],
  [/@radix-ui\/react-dialog@[\d.]+/g, '@radix-ui/react-dialog'],
  [/@radix-ui\/react-dropdown-menu@[\d.]+/g, '@radix-ui/react-dropdown-menu'],
  [/@radix-ui\/react-hover-card@[\d.]+/g, '@radix-ui/react-hover-card'],
  [/@radix-ui\/react-label@[\d.]+/g, '@radix-ui/react-label'],
  [/@radix-ui\/react-menubar@[\d.]+/g, '@radix-ui/react-menubar'],
  [/@radix-ui\/react-navigation-menu@[\d.]+/g, '@radix-ui/react-navigation-menu'],
  [/@radix-ui\/react-popover@[\d.]+/g, '@radix-ui/react-popover'],
  [/@radix-ui\/react-progress@[\d.]+/g, '@radix-ui/react-progress'],
  [/@radix-ui\/react-radio-group@[\d.]+/g, '@radix-ui/react-radio-group'],
  [/@radix-ui\/react-scroll-area@[\d.]+/g, '@radix-ui/react-scroll-area'],
  [/@radix-ui\/react-slot@[\d.]+/g, '@radix-ui/react-slot'],
  [/lucide-react@[\d.]+/g, 'lucide-react'],
  [/class-variance-authority@[\d.]+/g, 'class-variance-authority'],
  [/cmdk@[\d.]+/g, 'cmdk'],
  [/react-day-picker@[\d.]+/g, 'react-day-picker'],
  [/embla-carousel-react@[\d.]+/g, 'embla-carousel-react'],
  [/input-otp@[\d.]+/g, 'input-otp'],
  [/react-resizable-panels@[\d.]+/g, 'react-resizable-panels'],
  [/vaul@[\d.]+/g, 'vaul'],
  [/recharts@[\d.]+/g, 'recharts'],
  [/react-hook-form@[\d.]+/g, 'react-hook-form@7.55.0'], // Questo mantiene la versione
];

const fixFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  replacements.forEach(([pattern, replacement]) => {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      changed = true;
    }
  });
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${filePath}`);
    return true;
  }
  return false;
};

// Trova e correggi tutti i file .tsx in components/ui
const files = glob.sync('components/ui/*.tsx');
let fixedCount = 0;

console.log('🔧 Rimozione versioni dagli import...\\n');

files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`\\n✨ Completato! ${fixedCount} file corretti.`);
console.log('\\nEsegui ora: npm run build');
```

### 2. Esegui lo script:

```bash
node fix-imports.js
```

---

## ALTERNATIVA: Manuale con find & replace

Apri VSCode e usa Find & Replace (Cmd/Ctrl + Shift + H):

1. **Cerca (regex abilitato)**: `lucide-react@[\d.]+`  
   **Sostituisci**: `lucide-react`

2. **Cerca**: `@radix-ui/react-(\w+)@[\d.]+`  
   **Sostituisci**: `@radix-ui/react-$1`

3. **Cerca**: `class-variance-authority@[\d.]+`  
   **Sostituisci**: `class-variance-authority`

4. **Cerca**: `(cmdk|react-day-picker|embla-carousel-react|input-otp|react-resizable-panels|vaul|recharts)@[\d.]+`  
   **Sostituisci**: `$1`

Fai "Replace All" per ogni pattern.

---

## VERIFICA Finale

Dopo aver eseguito lo script:

```bash
# Verifica che non ci siano più import con versioni (tranne react-hook-form@7.55.0)
grep -r "@[0-9]\+\.[0-9]" components/ui/*.tsx | grep -v "react-hook-form@7.55.0"

# Se il comando sopra non restituisce nulla, SEI A POSTO! 🎉

# Ora prova il build
npm run build
```

---

## 🚀 Deploy su Vercel

Dopo aver corretto gli import:

```bash
git add .
git commit -m "Fix: rimossi numeri versione dagli import"
git push
```

Vercel ribuilderà automaticamente e il deploy dovrebbe funzionare! ✨

---

**Nota**: `react-hook-form@7.55.0` DEVE mantenere la versione come indicato nelle library_versions.
