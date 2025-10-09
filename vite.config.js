import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'reader': resolve(__dirname, 'reader.html'),
        'request-invitation': resolve(__dirname, 'request-invitation.html'),
        'stay-updated': resolve(__dirname, 'stay-updated.html'),
        'thank-you': resolve(__dirname, 'thank-you.html'),
        'you-are-invited': resolve(__dirname, 'you-are-invited.html'),
        'your-invitation-form': resolve(__dirname, 'your-invitation-form.html'),
        'join-the-waitlist': resolve(__dirname, 'join-the-waitlist.html'),
        '404': resolve(__dirname, '404.html')
      }
    }
  },
  server: {
    open: true
  },
  preview: {
    open: true
  },
  plugins: [
    {
      name: 'serve-404',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // List of known routes (without .html extension)
          const knownRoutes = [
            '/',
            '/reader',
            '/request-invitation',
            '/stay-updated',
            '/thank-you',
            '/you-are-invited',
            '/your-invitation-form',
            '/join-the-waitlist'
          ];

          const url = req.url.split('?')[0]; // Remove query params

          // Check if it's a known route or a static file
          if (
            !knownRoutes.includes(url) &&
            !url.startsWith('/images/') &&
            !url.startsWith('/api/') &&
            !url.includes('.') && // Not a file with extension
            url !== '/404' &&
            url !== '/404.html'
          ) {
            // Serve the 404 page
            const html404 = fs.readFileSync(resolve(__dirname, '404.html'), 'utf-8');
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(html404);
            return;
          }

          next();
        });
      }
    }
  ]
});