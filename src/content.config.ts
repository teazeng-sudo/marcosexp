import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  // 檔名以 _ 開頭的（例如範本）不會被發佈
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['value', 'growth', 'money', 'contract', 'people', 'scam', 'glossary']),
    date: z.coerce.date(),
    seal: z.string().max(4),      // 印章上的字，2～4 字
    keyPoint: z.string(),         // 一句話重點
    mine: z.boolean().default(false), // 我自己的經歷與檢討
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
