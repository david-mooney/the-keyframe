import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// TODO clean up these messy endpoints

const postsDirectory = join(process.cwd(), '_posts');

const calculateTimeToRead = (content: string) => {
  const wordsPerMinute = 225;
  const numberOfWords = content.split(/\s/g).length;
  return `${Math.ceil(numberOfWords / wordsPerMinute)} minute read`;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (field === 'readTime') {
      items[field] = calculateTimeToRead(content);
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getPostsByTag(tag: string, fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post) => post.tags.includes(tag))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export function getAllTags() {
  const slugs = getPostSlugs();
  const tags = slugs
    .map((slug) => getPostBySlug(slug, ['tags']))
    .reduce((acc, post) => {
      if (Array.isArray(post.tags)) {
        post.tags.forEach((tag) => {
          if (!acc.includes(tag)) {
            acc.push(tag);
          }
        });
      }

      return acc;
    }, []);

  return tags;
}
