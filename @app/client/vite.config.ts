import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@app/client2': path.resolve(__dirname, '../client2/src'),  // 이 부분 확인
    },
  },
});
