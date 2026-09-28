import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const body = `User-agent: *
Allow: /
Disallow: /about/

Sitemap: ${new URL('sitemap-index.xml', site)}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
