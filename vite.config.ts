import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// No need to import tailwindcss here
export default defineConfig({
  plugins: [react()], // Only include the React plugin
  server: {
    port: 5173,
  },
});
