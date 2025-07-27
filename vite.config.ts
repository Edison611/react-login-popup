import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'LoginPopup',
      fileName: 'login-popup',
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@react-oauth/google'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@react-oauth/google': 'GoogleOAuth',
        },
      },
    },
  },
});
