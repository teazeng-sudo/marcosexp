export const SITE = {
  name: '生意白話',
  tagline: '寫給有緣讀到的人',
  description: '把做生意的道理講成白話：從你拿什麼交換、客人從哪裡來、錢的往來、合約，到人與信用。',
  author: 'Marcos',
};

// 五層：照做生意的階段排，建議照順序讀
export const LAYERS = [
  { id: 'value', num: '一', name: '你拿什麼交換', blurb: '買賣的本質是交換。先想清楚價值，再算第一本帳。' },
  { id: 'growth', num: '二', name: '客人從哪裡來', blurb: '行銷、品牌、會員、通路，讓需要的人找到你。' },
  { id: 'money', num: '三', name: '錢的往來', blurb: '收款、票據、支付、貸款，錢怎麼進出才安全。' },
  { id: 'contract', num: '四', name: '合約與法律', blurb: '白紙黑字，是保護雙方的保險。' },
  { id: 'people', num: '五', name: '人與信用', blurb: '誠信、人情、說話的文化，生意做得久的關鍵。' },
] as const;

// 工具區：隨時查
export const TOOLS = [
  { id: 'scam', name: '防騙案例', blurb: '真實情境拆解，看懂話術的套路。' },
  { id: 'glossary', name: '名詞小辭典', blurb: '毛利、票期、定金……用白話說清楚。' },
] as const;

export const CATEGORIES = [
  ...LAYERS.map((c) => ({ ...c, label: `第${c.num}層` })),
  ...TOOLS.map((c) => ({ ...c, num: '', label: '工具區' })),
];

export const LESSONS = { name: '我踩過的坑', blurb: '我自己做生意犯過的錯，和事後的檢討。' };

export const url = (path = '') =>
  (import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '')).replace(/\/?$/, '/');
