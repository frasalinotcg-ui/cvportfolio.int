#!/usr/bin/env node

/**
 * Script per rimuovere le versioni dagli import in tutti i file .tsx
 * Uso: node fix-imports.js
 */

const fs = require('fs');
const path = require('path');

// Pattern da sostituire (ordine importante!)
const replacements = [
  // Radix UI
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
  [/@radix-ui\/react-select@[\d.]+/g, '@radix-ui/react-select'],
  [/@radix-ui\/react-separator@[\d.]+/g, '@radix-ui/react-separator'],
  [/@radix-ui\/react-slider@[\d.]+/g, '@radix-ui/react-slider'],
  [/@radix-ui\/react-slot@[\d.]+/g, '@radix-ui/react-slot'],
  [/@radix-ui\/react-switch@[\d.]+/g, '@radix-ui/react-switch'],
  [/@radix-ui\/react-tabs@[\d.]+/g, '@radix-ui/react-tabs'],
  [/@radix-ui\/react-toggle@[\d.]+/g, '@radix-ui/react-toggle'],
  [/@radix-ui\/react-toggle-group@[\d.]+/g, '@radix-ui/react-toggle-group'],
  [/@radix-ui\/react-tooltip@[\d.]+/g, '@radix-ui/react-tooltip'],
  
  // Altri pacchetti
  [/lucide-react@[\d.]+/g, 'lucide-react'],
  [/class-variance-authority@[\d.]+/g, 'class-variance-authority'],
  [/sonner@[\d.]+/g, 'sonner'],
  [/next-themes@[\d.]+/g, 'next-themes'],
  [/cmdk@[\d.]+/g, 'cmdk'],
  [/react-day-picker@[\d.]+/g, 'react-day-picker'],
  [/embla-carousel-react@[\d.]+/g, 'embla-carousel-react'],
  [/input-otp@[\d.]+/g, 'input-otp'],
  [/react-resizable-panels@[\d.]+/g, 'react-resizable-panels'],
  [/vaul@[\d.]+/g, 'vaul'],
  [/recharts@[\d.]+/g, 'recharts'],
];

function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Applica tutte le sostituzioni
  replacements.forEach(([pattern, replacement]) => {
    content = content.replace(pattern, replacement);
  });
  
  // Scrivi solo se è cambiato
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function main() {
  console.log('🔧 Rimozione versioni dagli import...\n');
  
  const componentsDir = path.join(__dirname, 'components', 'ui');
  
  if (!fs.existsSync(componentsDir)) {
    console.error('❌ Directory components/ui non trovata!');
    process.exit(1);
  }
  
  const files = getAllTsxFiles(componentsDir);
  let fixedCount = 0;
  
  files.forEach(file => {
    if (fixFile(file)) {
      const relativePath = path.relative(__dirname, file);
      console.log(`  ✅ ${relativePath}`);
      fixedCount++;
    }
  });
  
  console.log(`\n✨ Completato! ${fixedCount}/${files.length} file corretti.`);
  
  if (fixedCount > 0) {
    console.log('\n📋 Prossimi passi:');
    console.log('  1. npm run build');
    console.log('  2. git add .');
    console.log('  3. git commit -m "Fix: rimossi numeri versione dagli import"');
    console.log('  4. git push');
  } else {
    console.log('\n✅ Nessuna correzione necessaria!');
  }
}

main();
