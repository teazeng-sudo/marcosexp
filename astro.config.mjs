import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 用自訂網域（例如 marcosexp.com）：base 保持 '/'
// 用 GitHub 專案網址（username.github.io/repo）：base 改成 '/repo/'
export default defineConfig({
  site: 'https://example.com',
  base: '/',
  integrations: [
    sitemap({
      // 「關於我」不放進 sitemap，不主動讓搜尋引擎收錄
      filter: (page) => !page.includes('/about'),
    }),
  ],
});
