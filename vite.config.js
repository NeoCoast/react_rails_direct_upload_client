import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@constants/colors.scss";
        @import "@constants/fonts.scss";
        @import "@constants/sizes.scss";`,
      },
    },
  },
  define: {
    global: 'window',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@constants': path.resolve(__dirname, './src/constants/'),
      '@containers': path.resolve(__dirname, './src/containers/'),
      '@helpers': path.resolve(__dirname, './src/helpers/'),
      '@redux': path.resolve(__dirname, './src/redux/'),
    },
  },
});
