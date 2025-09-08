import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    tsconfigPaths(), // permite resolver "@/..." usando tsconfig paths
    mode === "development" && componentTagger()
  ].filter(Boolean),
  // alternativa/extra: definir base se seu preview exige caminhos relativos
  // base: './',
  resolve: {
    alias: {
      // fallback manual (opcional) — ao usar tsconfigPaths pode não ser necessário
      '@': path.resolve(__dirname, 'src'),
    },
  },
}));
