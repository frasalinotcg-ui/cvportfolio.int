# Francesco Salvatori - Fashion Designer Portfolio

Portfolio di moda interattivo minimalista con texture beige, fotografie in bianco e nero, e layout a doppia pagina come un magazine.

## 🎨 Caratteristiche

- **CV Page**: Pagina dedicata al curriculum con foto personale e biografia
- **Portfolio Gallery**: 6 progetti navigabili con animazioni fluide
- **Sistema di caricamento immagini**: Integrazione IndexedDB per sostituire immagini con salvataggio permanente
- **Traduzione EN/IT**: Sistema completo di traduzione automatica con toggle interattivo
- **Design responsivo**: Ottimizzato per desktop e mobile
- **Texture carta**: Stile minimalista con texture sottili che simulano le fibre della carta

## 📦 Tecnologie

- **React 18.3** con TypeScript
- **Vite 6.0** per build e development
- **Tailwind CSS v3.4** per lo styling
- **Motion** (Framer Motion) per le animazioni
- **Lucide React** per le icone
- **IndexedDB** per lo storage locale delle immagini

## 🚀 Installazione

### 1. Clona/Crea il progetto

```bash
mkdir francesco-salvatori-portfolio
cd francesco-salvatori-portfolio
```

### 2. Installa le dipendenze

```bash
npm install
```

### 3. Avvia il server di sviluppo

```bash
npm run dev
```

### 4. Build per produzione

```bash
npm run build
```

Il progetto includerà automaticamente:
- Plugin Vite per gestire gli import `figma:asset/`
- Configurazione Tailwind CSS v3.4
- PostCSS con autoprefixer
- TypeScript configurato

## 📁 Struttura del progetto

```
portfolio-francesco-salvatori/
├── index.html                          # Entry point HTML
├── main.tsx                            # Bootstrap React
├── vite.config.ts                      # Configurazione Vite
├── package.json                        # Dipendenze
├── App.tsx                             # Componente principale con routing
│
├── components/
│   ├── CVPage.tsx                      # Pagina CV con foto e biografia
│   ├── PortfolioPage.tsx               # Galleria progetti (6 progetti)
│   ├── ProjectDetail.tsx               # Dettaglio singolo progetto
│   ├── Navigation.tsx                  # Barra di navigazione
│   ├── LanguageToggle.tsx              # Toggle EN/IT responsive
│   ├── PortfolioSpread.tsx             # Layout spread magazine
│   │
│   ├── figma/
│   │   └── ImageWithFallback.tsx       # Componente per gestione immagini
│   │
│   └── ui/                             # Componenti shadcn/ui (42 componenti)
│
├── styles/
│   └── globals.css                     # Stili globali, texture carta, font
│
└── utils/
    ├── imageStorage.ts                 # IndexedDB per storage immagini
    └── languageContext.tsx             # Context per sistema traduzione EN/IT
```

## 🎯 Funzionalità principali

### Sistema di traduzione EN/IT
- Toggle interattivo in alto a destra in ogni pagina
- Traduzione automatica di tutti i testi (CV, progetti, UI)
- Salvataggio preferenza lingua in React Context

### Sistema di caricamento immagini
- Upload immagini personalizzate per ogni progetto
- Storage permanente con IndexedDB
- Persistenza dopo refresh della pagina
- Supporto per tutti e 6 i progetti della gallery

### Progetti nella Gallery
1. **Marcel** - Fashion Photography (20+ immagini)
2. **Fragments of Silence** - Editorial Campaign (8 immagini)
3. **Vertigine** - Print Design (6 pagine magazine)
4. **In the Making** - Behind the Scenes (6 immagini)
5. **The Essence** - Minimalist Collection (6 immagini)
6. **Prigionieri** - Print Design (scrolling verticale)

## 🛠️ Dipendenze principali

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "motion": "^11.11.17",
    "lucide-react": "latest",
    "class-variance-authority": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.3",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "typescript": "^5.7.2",
    "tailwindcss": "^4.0.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49"
  }
}
```

## 🎨 Personalizzazione

### Modificare i contenuti del CV
Edita `/components/CVPage.tsx`:
- Nome, titolo, biografia
- Esperienze lavorative
- Skills e competenze

### Modificare i progetti
Edita `/components/PortfolioPage.tsx` e `/components/ProjectDetail.tsx`:
- Titoli e descrizioni progetti
- Immagini (o usa l'upload integrato)
- Categorie e metadati

### Modificare le traduzioni
Edita `/utils/languageContext.tsx`:
- Aggiungi nuove chiavi di traduzione
- Modifica testi esistenti in EN/IT

## 📱 Responsive Design

Il portfolio è completamente responsive:
- **Desktop**: Layout a doppia pagina tipo magazine
- **Tablet**: Layout adattivo
- **Mobile**: Layout ottimizzato con controlli touch

Il toggle EN/IT è stato ottimizzato per mobile:
- Dimensioni ridotte su schermi piccoli
- Posizionamento `right-4` per evitare tagli
- Font e padding ridotti per compattezza

## 🚀 Deploy

### Vercel (consigliato)

**📖 Leggi la [Guida Deploy Completa](./DEPLOY.md) per istruzioni dettagliate e troubleshooting!**

**Opzione 1: Deploy automatico da GitHub**
1. Pusha il progetto su GitHub
2. Vai su [vercel.com](https://vercel.com)
3. Clicca "Import Project"
4. Seleziona il repository
5. Vercel rileverà automaticamente le impostazioni (framework: Vite)
6. Clicca "Deploy"

**Opzione 2: Deploy da CLI**
```bash
npm install -g vercel
vercel
```

**Configurazione Vercel (già inclusa in `vercel.json`):**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
- Framework: Vite
- Node Version: 20 (specificata in `.nvmrc`)

### Netlify
```bash
npm run build
# Carica la cartella dist/ oppure connetti il repository GitHub
```

**Configurazione Netlify:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20

### GitHub Pages
```bash
npm run build
# Configura GitHub Actions per deploy automatico dalla cartella dist/
```

## 📝 Note

- Le immagini importate da Figma usano lo schema `figma:asset/`
- Le immagini personalizzate vengono salvate in IndexedDB
- Il sistema supporta sia immagini raster (PNG, JPG) che vettoriali (SVG)
- I font utilizzati: Montserrat (sans-serif) e Lora (serif)

## ⚠️ Importante per il Deploy

**Struttura del progetto:**
- Il progetto usa una struttura piatta con `main.tsx` e `App.tsx` nella root
- I CSS sono importati con percorso assoluto: `/styles/globals.css`
- Vite è configurato con `root: '.'` per gestire questa struttura

**Immagini Figma Assets:**

Questo progetto è stato creato con Figma Make e utilizza lo schema `figma:asset/` per le immagini. Per il deploy su Vercel/Netlify:

1. **In ambiente Figma Make**: Le immagini funzionano automaticamente
2. **Per deploy esterno**: 
   - Le immagini `figma:asset/` verranno sostituite con placeholder SVG durante la build
   - Per usare immagini reali, sostituisci gli import `figma:asset/` con:
     - URL pubblici (es. da un CDN)
     - Immagini nella cartella `/public`
     - O usa il sistema di upload integrato per caricare le tue immagini

**Plugin Vite configurato:**
Il file `vite.config.ts` include:
- Plugin custom per gestire gli import `figma:asset/` convertendoli in placeholder
- Configurazione `root: '.'` per struttura piatta
- PostCSS configurato per Tailwind CSS v3.4
- Alias `@` per import più puliti
- Questo permette al progetto di buildare senza errori anche fuori dall'ambiente Figma Make

## 👨‍💻 Autore

**Francesco Salvatori**  
Fashion Designer - Roma, Italia  
Nato nel 2003

---

Creato con React, Tailwind CSS e Motion • © 2026