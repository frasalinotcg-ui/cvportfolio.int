import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Plugin to handle figma:asset imports
function figmaAssetPlugin() {
  return {
    name: 'figma-asset-plugin',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        return id;
      }
      return null;
    },
    load(id: string) {
      if (id.startsWith('figma:asset/')) {
        // Return a placeholder data URL for build
        // In production, you should replace these with actual image URLs
        const placeholderSVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23e5e5e5'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EPlaceholder Image%3C/text%3E%3C/svg%3E`;
        return `export default "${placeholderSVG}";`;
      }
      return null;
    }
  };
}

export default defineConfig({
  plugins: [react(), figmaAssetPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});