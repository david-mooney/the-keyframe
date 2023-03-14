import { getAllTags } from './api';
import Fuse from 'fuse.js';
import { posts } from '../cache/posts-cache';

const getAllPostsWithTags = (query: string) => {
  const allTags = getAllTags();

  const tagsInQuery = allTags.filter((tag) => {
    return query.includes(tag);
  });

  return posts.filter((post) => {
    if (tagsInQuery.length === 0) return true;
    return tagsInQuery.some((tag) => post.tags.includes(tag));
  });
};

const fuzzySearch = (query: string) => {
  const postsWithQueryTags = getAllPostsWithTags(query);

  const fuse = new Fuse(postsWithQueryTags, {
    includeScore: true,
    keys: ['title', 'excerpt', 'tags'],
  });

  return fuse.search(query).map((result) => result.item);
};

export default fuzzySearch;
