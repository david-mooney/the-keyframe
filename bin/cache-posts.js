const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const DayJs = require('dayjs');

/* TODO - move this to the api and run at build time? */

function formatDate(date) {
  const dateToFormat = new Date(date);
  return DayJs(dateToFormat).format('DD MMM YYYY');
}

function postData() {
  const postsDirectory = path.join(process.cwd(), '_posts');
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title,
        excerpt: matterResult.data.excerpt,
        tags: matterResult.data.tags,
        created: formatDate(matterResult.data.created),
      };
    })
    .sort((a, b) => {
      return new Date(b.created) - new Date(a.created);
    });

  return `export const posts = ${JSON.stringify(posts)}`;
}

fs.writeFile('cache/posts-cache.js', postData(), function (error) {
  if (error) {
    console.error('Posts cache creation failed', error);
    return;
  }

  console.info('Posts cache created successfully');
});
