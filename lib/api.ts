import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import PostFields from '@interfaces/post-fields';
import { FIELDS } from '@lib/constants';
import formatDate from '@lib/format-date';
// import Fuse from 'fuse.js';

const postsDirectory = join(process.cwd(), '_posts');

const sortByDate = (current, next) => (current.date > next.date ? -1 : 1);

const getAllPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

const calculateTimeToRead = (content: string) => {
  const wordsPerMinute = 225;
  const numberOfWords = content.split(/\s/g).length;
  return `${Math.ceil(numberOfWords / wordsPerMinute)} minute read`;
};

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items: PostFields = {};

  fields.forEach((field) => {
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }

    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (field === 'readTime') {
      items[field] = calculateTimeToRead(content);
    }

    if (field === 'date') {
      items[field] = formatDate(data[field]);
    }
  });

  return items;
}

export function getSinglePost(slug: string) {
  return getPostBySlug(slug, FIELDS.post);
}

export function getAllPosts(fields: string[] = FIELDS.post) {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => getPostBySlug(slug, fields)).sort(sortByDate);
}

export function getAllPostPreviews(query: string) {
  if (query) {
    // move the search logic to the server
    // filter out tags from the query
    // then search the remaining tagged posts
  }

  return getAllPosts(FIELDS.preview);
}

export function getPostsByTag(tag: string) {
  const slugs = getAllPostSlugs();

  return slugs
    .map((slug) => getPostBySlug(slug, FIELDS.preview))
    .filter((post) => post.tags.includes(tag))
    .sort(sortByDate);
}

export function getAllTags() {
  const slugs = getAllPostSlugs();

  const getUniqueTags = (tags, post) => {
    const uniqueTags = [...new Set([...tags, ...post.tags])];
    return uniqueTags;
  };

  return slugs
    .map((slug) => getPostBySlug(slug, FIELDS.preview))
    .reduce(getUniqueTags, []);
}
