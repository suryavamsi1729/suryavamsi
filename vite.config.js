import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//plugins
import tailwindcss from '@tailwindcss/vite';

import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src'),

        '@components': path.resolve(__dirname, 'src/components'),
        '@animations': path.resolve(__dirname, 'src/components/animations'),
        '@headers': path.resolve(__dirname, 'src/components/headers'),
        '@common': path.resolve(__dirname, 'src/components/common'),

        '@pages': path.resolve(__dirname, 'src/pages'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),

        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@context': path.resolve(__dirname, 'src/context'),

        '@lib': path.resolve(__dirname, 'src/lib'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        
        '@styles': path.resolve(__dirname, 'src/styles'),
    },
  }
  
})
