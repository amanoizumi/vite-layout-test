import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
// 熱更新的套件，
// 但不知道為何，陣列中使用 './pages/**/*.html' 卻無法熱更新 html 檔案
// 所以將頁面換成了 ejs 檔案
import liveReload from 'vite-plugin-live-reload';


export default defineConfig({
  plugins: [
    liveReload(['./layout/**/*.ejs', './pages/**/*.ejs', './pages/**/*.html']),
    ViteEjsPlugin({
      title: '首頁',
    }),
  ],
});
