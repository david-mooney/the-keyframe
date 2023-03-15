import { NextApiRequest, NextApiResponse } from 'next';
import fuzzySearch from '@lib/fuzzy-search';

type SearchResponse = {
  results: string[];
};

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<SearchResponse>
) {
  if (request.query.q === undefined) {
    response.statusCode = 400;
    response.end();
    return;
  }

  const results = fuzzySearch(request.query.q as string);

  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(results));
}
