import { writeFileSync } from 'node:fs';
import qs from 'qs';

const strapiUrl =
  `${process.env.CMS_URL}/api/reviews?` +
  qs.stringify(
    {
      fields: ['slug', 'title', 'subtitle', 'publishedAt'],
      populate: { image: { fields: ['url'] } },
      sort: ['publishedAt:desc'],
      pagination: { pageSize: 15, page: 1 },
    },
    { encodeValuesOnly: true }
  );

const response = await fetch(strapiUrl);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-response.json';
writeFileSync(file, formatted, 'utf8');
