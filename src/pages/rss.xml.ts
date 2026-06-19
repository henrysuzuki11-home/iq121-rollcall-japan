import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, BASE_PATH } from '../consts';

export async function GET(context: APIContext) {
  const articles = (await getCollection('articles', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    // Full site home (origin + base path) for the channel link.
    site: new URL(BASE_PATH, context.site ?? SITE_URL).href,
    customData: '<language>ja-jp</language>',
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      // Include the base path so feed links resolve on the project site.
      link: `${BASE_PATH}/articles/${article.slug}`,
      categories: [article.data.category, ...article.data.tags],
    })),
  });
}
