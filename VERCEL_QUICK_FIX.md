# ⚡ Soluzione Rapida per Deploy su Vercel

## 🎯 Problema
Vercel non riesce a leggere/buildare il progetto.

## ✅ Soluzioni Implementate

### 1. **File di Configurazione Aggiunti**

Sono stati creati/aggiornati i seguenti file essenziali:

- ✅ **`vercel.json`** - Configurazione specifica per Vercel
- ✅ **`.nvmrc`** - Specifica Node.js 20
- ✅ **`.npmrc`** - Configurazione npm
- ✅ **`.gitignore`** - File da ignorare in Git
- ✅ **`.vercelignore`** - File da ignorare in Vercel
- ✅ **`tsconfig.json`** - Path mapping aggiunto
- ✅ **`package.json`** - Engines specificati
- ✅ **`vite.config.ts`** - Alias `@` configurato
- ✅ **`tailwind.config.js`** - Content paths corretti

### 2. **CSS: Tailwind v3 (non v4)**

Il progetto usa **Tailwind CSS v3.4.17** con le direttive standard:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

❌ **NON** usa `@import "tailwindcss";` (v4) che causa problemi di build.

### 3. **Import CSS Corretto**

In `/main.tsx`:
```tsx
import './styles/globals.css';  // ✅ Path relativo
```

Con alias in `vite.config.ts`:
```ts
resolve: {
  alias: {
    '@': path.resolve(__dirname, '.')
  }
}
```

### 4. **Build Command**

In `package.json`:
```json
{
  "scripts": {
    "build": "tsc --noEmit && vite build"
  }
}
```

Include type-checking TypeScript prima del build Vite.

## 🚀 Come Procedere

### Opzione A: Deploy da GitHub (Raccomandato)

```bash
# 1. Inizializza Git (se non già fatto)
git init

# 2. Aggiungi tutti i file
git add .

# 3. Commit
git commit -m "Setup progetto per deploy Vercel"

# 4. Crea repository su GitHub e pusha
git branch -M main
git remote add origin https://github.com/TUO_USERNAME/TUO_REPO.git
git push -u origin main

# 5. Vai su vercel.com e importa il repository
```

### Opzione B: Deploy da CLI

```bash
# 1. Installa Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Deploy di produzione
vercel --prod
```

## 🔍 Verifica Locale Prima del Deploy

```bash
# 1. Installa dipendenze
npm install

# 2. Testa il build
npm run build

# 3. Testa il preview
npm run preview
```

Se questi comandi funzionano in locale, funzioneranno anche su Vercel! ✨

## 📋 Checklist Vercel

Quando importi il progetto su Vercel, assicurati che:

- [ ] **Framework Preset**: Vite (rilevato automaticamente)
- [ ] **Build Command**: `npm run build`
- [ ] **Output Directory**: `dist`
- [ ] **Install Command**: `npm install`
- [ ] **Node.js Version**: 20.x (da `.nvmrc`)

## ⚠️ Note Importanti

1. **Immagini `figma:asset/`**: Saranno sostituite con placeholder SVG durante il build (questo è normale!)

2. **Struttura piatta**: Il progetto usa `main.tsx` e `App.tsx` nella root (non in `src/`)

3. **CSS**: Non modificare le direttive `@tailwind` in `globals.css`

## 🐛 Se Ancora Non Funziona

1. **Controlla i Build Logs** su Vercel (molto dettagliati)
2. **Testa `npm run build` in locale** - deve passare senza errori
3. **Verifica la versione Node.js** - deve essere ≥18
4. **Leggi** `DEPLOY.md` per troubleshooting avanzato

## 📞 Link Utili

- 📖 [Guida Deploy Completa](./DEPLOY.md)
- 🌐 [Vercel Dashboard](https://vercel.com/dashboard)
- 💬 [Vercel Discord](https://discord.gg/vercel)
- 📚 [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)

---

**Configurazione aggiornata**: Gennaio 2026
Tutto è pronto per il deploy! 🚀
