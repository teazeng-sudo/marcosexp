# 生意白話

把做生意的道理講成白話，寫給有緣讀到的人。使用 Astro 建置，部署在 GitHub Pages。

## 第一次設定

1. 在 GitHub 建立新的 repo，把這個資料夾推上去（分支用 `main`）。
2. 到 repo 的 **Settings → Pages**，Source 選 **GitHub Actions**。
3. 修改 `astro.config.mjs` 的 `site`：
   - 用自訂網域：填網域，`base` 保持 `'/'`，並在 `public/` 放一個 `CNAME` 檔寫上網域
   - 用 `帳號.github.io/repo名稱`：`base` 改成 `'/repo名稱/'`
4. 網站名稱和分類說明在 `src/config.ts` 修改。

之後每次推到 `main`，網站會自動更新。

sitemap 會在 build 時自動產生（`/sitemap-index.xml`），`robots.txt` 也會依 `site` 設定自動帶入正確網址。

## 關於我

`/about/` 這一頁沒有放進選單和首頁，也排除在 sitemap 之外，並加了 noindex，只有知道網址的人才看得到。

想讓它公開：刪掉 `src/pages/about.astro` 裡的 `noindex={true}`，並拿掉 `astro.config.mjs` 裡 sitemap 的 `filter` 設定。想在頁尾放連結，改 `src/layouts/Base.astro` 的 footer。

## 寫新文章

1. 複製 `src/content/articles/_template.md`，改成英文檔名，例如 `deposit-vs-down-payment.md`（檔名就是網址）。
2. 填好最上方的設定：
   - `category`：五層依序是 `value` 你拿什麼交換、`growth` 客人從哪裡來、`money` 錢的往來、`contract` 合約與法律、`people` 人與信用；工具區是 `scam` 防騙案例、`glossary` 名詞小辭典
   - `mine`：寫自己的經歷與檢討時改成 `true`。文章照樣放在對應的分類，但印章會變成紅底白字，並同時出現在「我踩過的坑」
   - `seal`：印章上的字，2～4 個字
   - `keyPoint`：一句話重點
   - `draft: false` 才會上線
3. 要寫自己的經歷與檢討，複製 `_my-lesson-template.md`（`mine: true`）。檔名開頭有底線的檔案不會被發佈。
4. 內文照「一個故事 → 背後的道理 → 實際怎麼做」三段寫。

## 在電腦上預覽

```bash
npm install
npm run dev
```

打開 http://localhost:4321 。
