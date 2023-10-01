import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type Author from './author';

type PostType = {
  id: string;
  slug: string;
  title: string;
  featured: boolean;
  created: string;
  updated: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  order: number;
  ogImage: {
    url: string;
  };
  content: MDXRemoteSerializeResult;
  readTime: string;
  tags: string[];
};

export default PostType;
