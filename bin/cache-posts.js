const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function postData() {
  const postsDirectory = path.join(process.cwd(), '_posts');
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      excerpt: matterResult.data.excerpt,
      tags: matterResult.data.tags,
    };
  });
  return `export const posts = ${JSON.stringify(posts)}`;
}

fs.writeFile('posts-cache.js', postData(), function (error) {
  if (error) {
    console.log(error);
  }

  console.log('Posts cache created successfully');
});
