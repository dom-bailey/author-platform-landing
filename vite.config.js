import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'request-invitation': resolve(__dirname, 'request-invitation.html'),
        'stay-updated': resolve(__dirname, 'stay-updated.html'),
        'thank-you': resolve(__dirname, 'thank-you.html'),
        'you-are-invited': resolve(__dirname, 'you-are-invited.html'),
        'your-invitation-form': resolve(__dirname, 'your-invitation-form.html')
      }
    }
  },
  server: {
    open: true
  },
  preview: {
    open: true
  }
});