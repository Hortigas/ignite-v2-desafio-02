import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ignite-v2-desafio-02/',
  plugins: [react()]
});
