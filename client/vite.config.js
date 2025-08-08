// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // allows access from phone
    port: 3000        // optional, default is 5173
  }
});

