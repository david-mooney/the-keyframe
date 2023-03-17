import { Searcher } from 'fast-fuzzy';
import { posts } from '../cache/posts-cache';

// TODO use lunr instead of fast-fuzzy?

const Fuzzy = new Searcher(posts, {
  threshold: 0.7,
  keySelector: (post) => {
    return [post.title, post.excerpt, post.tags.join(' ')];
  },
});

const fuzzySearch = (query: string) => {
  const results = Fuzzy.search(query);
  return results;
};

export default fuzzySearch;
