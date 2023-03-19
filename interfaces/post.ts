import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type Author from './author';

type PostType = {
  slug: string;
  title: string;
  featured: boolean;
  created: string;
  updated: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: MDXRemoteSerializeResult;
  readTime: string;
  tags: string[];
};

export default PostType;
