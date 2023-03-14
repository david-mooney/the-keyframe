const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const DayJs = require('dayjs');

function formatDate(date) {
  const dateToFormat = new Date(date);
  return DayJs(dateToFormat).format('DD MMM YYYY');
}

function postData() {
  const postsDirectory = path.join(process.cwd(), '_posts');
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title,
        excerpt: matterResult.data.excerpt,
        tags: matterResult.data.tags,
        date: formatDate(matterResult.data.date),
      };
    })
    .sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
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
