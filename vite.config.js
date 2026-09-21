import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/jordan-ai-data-assistant/',
  plugins: [react()],
});
