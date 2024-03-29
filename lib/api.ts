import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import PostFields from '@interfaces/post-fields';
import { FIELDS } from '@lib/constants';
import formatDate from '@lib/format-date';
import fuzzySearch from '@lib/fuzzy-search';

const postsDirectory = join(process.cwd(), '_posts');

const sortByDate = (a, b) => b.date.localeCompare(a.date);

const getAllPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

const calculateTimeToRead = (content: string) => {
  const wordsPerMinute = 225;
  const numberOfWords = content.split(/\s/g).length;
  return `${Math.ceil(numberOfWords / wordsPerMinute)} min read`;
};

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
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

    if (field === 'created') {
      items['date'] = data[field];
      items[field] = formatDate(data[field]);
    }

    if (field === 'updated' && data[field]) {
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

export function getAllPostPreviews(query?: string) {
  const results = query ? fuzzySearch(query) : [];
  return [getAllPosts(FIELDS.preview), results];
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
    return [...new Set([...tags, ...post.tags])];
  };

  return slugs
    .map((slug) => getPostBySlug(slug, FIELDS.preview))
    .reduce(getUniqueTags, []);
}
