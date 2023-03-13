import { NextApiRequest, NextApiResponse } from 'next';
import Fuse from 'fuse.js';
import { posts } from '../../posts-cache';

const allTags = posts.reduce((acc, post) => {
  return [...new Set([...acc, ...post.tags])];
}, [] as string[]);

type Data = {
  results: string[];
};

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  if (request.query.q === undefined) {
    response.statusCode = 400;
    response.end();
    return;
  }

  const tagsInQuery = allTags.filter((tag) => {
    return request.query.q.includes(tag);
  });

  const postsWithTagsInQuery = posts.filter((post) => {
    if (tagsInQuery.length === 0) return true;
    return tagsInQuery.some((tag) => post.tags.includes(tag));
  });

  const fuse = new Fuse(postsWithTagsInQuery, {
    includeScore: true,
    keys: ['title', 'excerpt', 'tags'],
  });

  const results = fuse.search(request.query.q as string);

  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(results));
}
