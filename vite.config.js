import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'request-invitation': resolve(__dirname, 'request-invitation.html')
      }
    }
  }
});