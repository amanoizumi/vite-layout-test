import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { resolve } from 'path'
// 熱更新的套件，
// 但不知道為何，陣列中雖然加入 './pages/**/*.html' 卻無法熱更新 html 檔案
// 所以目前都將頁面的副檔名換成了 .ejs
import liveReload from 'vite-plugin-live-reload';

export default defineConfig({
  plugins: [liveReload(['./layout/**/*.ejs', './pages/**/*.ejs', './pages/**/*.html']), ViteEjsPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
});
