import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Import the postcss7-compatible tailwindcss package
import tailwindcss from '@tailwindcss/postcss7-compat';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Now using the correct tailwindcss package
        autoprefixer(),
      ],
    },
  },
});
