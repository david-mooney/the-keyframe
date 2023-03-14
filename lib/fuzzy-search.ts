import { getAllTags } from './api';
import Fuse from 'fuse.js';
import { posts } from '../cache/posts-cache';

const getAllPostsWithTags = (query: string) => {
  const tags = getAllTags();
  const queryTags = query.split(' ').filter((tag) => tags.includes(tag));

  if (queryTags.length === 0) {
    return posts;
  }

  const postsWithQueryTags = posts.filter((post) =>
    post.tags.some((tag) => queryTags.includes(tag))
  );

  return postsWithQueryTags;
};

const fuzzySearch = (query: string) => {
  const postsWithQueryTags = getAllPostsWithTags(query);

  const fuse = new Fuse(postsWithQueryTags, {
    findAllMatches: true,
    ignoreLocation: true,
    keys: ['title', 'excerpt', 'tags'],
  });

  return fuse.search(query).map((result) => result.item);
};

export default fuzzySearch;
