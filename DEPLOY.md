# 🚀 Guida Deploy su Vercel

## ✅ Checklist Pre-Deploy

Prima di fare il deploy, assicurati che:

- [ ] Tutti i file di configurazione siano presenti:
  - `package.json` ✓
  - `vite.config.ts` ✓
  - `tailwind.config.js` ✓
  - `postcss.config.js` ✓
  - `tsconfig.json` ✓
  - `vercel.json` ✓
  - `.nvmrc` ✓

- [ ] Le dipendenze siano corrette nel `package.json`
- [ ] Il comando `npm run build` funzioni localmente
- [ ] Non ci siano errori TypeScript (`npm run build` include `tsc --noEmit`)

## 🔧 Configurazione Vercel

Il progetto include già un file `vercel.json` con le seguenti impostazioni:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Versione Node.js

Il file `.nvmrc` specifica Node.js 20. Vercel userà automaticamente questa versione.

Se hai problemi, puoi anche specificarla nelle impostazioni del progetto su Vercel:
- Settings → General → Node.js Version → 20.x

## 📦 Deploy da GitHub (Raccomandato)

### Passo 1: Pusha su GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TUO_USERNAME/TUO_REPO.git
git push -u origin main
```

### Passo 2: Importa su Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Clicca "Add New..." → "Project"
3. Seleziona il repository GitHub
4. Vercel rileverà automaticamente:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Clicca "Deploy"

## 💻 Deploy da CLI

### Installazione Vercel CLI

```bash
npm install -g vercel
```

### Deploy

```bash
# Prima volta (interattivo)
vercel

# Deploy di produzione
vercel --prod
```

## 🐛 Troubleshooting

### Errore: "Could not resolve ./styles/globals.css"

**Soluzione**: Il file `main.tsx` importa i CSS con path relativo:
```tsx
import './styles/globals.css';
```

Se l'errore persiste, verifica che:
1. Il file `/styles/globals.css` esista
2. L'alias `@` sia configurato in `vite.config.ts`:
   ```ts
   resolve: {
     alias: {
       '@': path.resolve(__dirname, '.')
     }
   }
   ```

### Errore: Build fallisce con TypeScript

**Soluzione**: Il comando build include type-checking:
```json
"build": "tsc --noEmit && vite build"
```

Per disabilitare temporaneamente il type-checking:
```json
"build": "vite build"
```

### Errore: Immagini figma:asset/ non funzionano

**Normale!** Le immagini `figma:asset/` sono specifiche per Figma Make.

**Soluzioni**:
1. **Plugin Vite** (già incluso): Converte automaticamente in placeholder SVG
2. **Sostituisci con URL reali**: Cambia gli import:
   ```tsx
   // Da:
   import img from "figma:asset/abc123.png"
   
   // A:
   import img from "/public/images/abc123.png"
   // oppure
   const img = "https://example.com/image.png"
   ```
3. **Usa il sistema di upload**: Il portfolio include un sistema IndexedDB per caricare immagini custom

### Errore: Route 404 dopo il refresh

**Soluzione**: Il file `vercel.json` include già la configurazione:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

Questo fa sì che tutte le route vengano gestite da React Router.

### Errore: Dimensione bundle troppo grande

**Soluzione**:
1. Verifica che `vite build` stia facendo tree-shaking correttamente
2. Considera code-splitting:
   ```tsx
   const CVPage = lazy(() => import('./components/CVPage'));
   ```

## 📊 Monitoring Build

Durante il build su Vercel, vedrai:

```
1. Installing dependencies...
   ✓ npm install (dependencies da package.json)

2. Building...
   ✓ tsc --noEmit (type checking)
   ✓ vite build (build ottimizzato)
   
3. Deploying...
   ✓ Upload files to CDN
   ✓ Assign domain
```

## 🌐 Dopo il Deploy

Vercel ti fornirà:
- **URL di staging**: `nome-progetto-username.vercel.app`
- **URL personalizzato**: Configurabile nelle impostazioni

### Domini Personalizzati

1. Vai su Project Settings → Domains
2. Aggiungi il tuo dominio
3. Configura i DNS come indicato da Vercel

## 🔄 Deploy Automatici

Vercel effettua deploy automatici quando:
- **Push su main**: Deploy di produzione
- **Push su altri branch**: Deploy di preview
- **Pull Request**: Deploy di preview con URL dedicato

## 📝 Environment Variables

Se hai bisogno di variabili d'ambiente:

1. Vai su Project Settings → Environment Variables
2. Aggiungi le variabili necessarie
3. Riavvia il build

Nel codice:
```tsx
const apiKey = import.meta.env.VITE_API_KEY;
```

## ✨ Ottimizzazioni Post-Deploy

Vercel applica automaticamente:
- ✅ **Compression**: Gzip/Brotli
- ✅ **Caching**: Smart caching con CDN
- ✅ **Edge Network**: Distribuzione globale
- ✅ **HTTPS**: Certificato SSL automatico
- ✅ **HTTP/2**: Supporto protocollo moderno

## 📞 Supporto

Se hai ancora problemi:

1. **Build Logs**: Controlla i log dettagliati su Vercel
2. **Locale**: Testa `npm run build` e `npm run preview` in locale
3. **Vercel Discord**: [discord.gg/vercel](https://discord.gg/vercel)
4. **GitHub Issues**: Apri un issue se il problema persiste

---

**Ultimo aggiornamento**: Gennaio 2026
