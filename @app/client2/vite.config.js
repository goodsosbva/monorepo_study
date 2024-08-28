import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@app/client': path.resolve(__dirname, '../client/src'),  // 이 부분 수정
    },
  },
});
