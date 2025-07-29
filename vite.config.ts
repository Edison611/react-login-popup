import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ReactLoginPopup',
      fileName: (format) => `login-popup.${format}.js`,
      formats: ['es'],
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
