import { NextApiRequest, NextApiResponse } from 'next';
import Fuse from 'fuse.js';
import { posts } from '../../posts-cache';

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

  const fuse = new Fuse(posts, {
    includeScore: true,
    keys: ['title', 'excerpt', 'tags'],
  });

  const results = fuse.search(request.query.q as string);

  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(results));
}
