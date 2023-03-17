import Breadcrumbs from '@components/breadcrumbs';
import CoverImage from '@components/cover-image';
import PostTitle from './post-title';
import Avatar from './avatar';
import type Author from '@interfaces/author';
import { LINKS } from '@lib/constants';

type Props = {
  title: string;
  coverImage: string;
  created: string;
  updated: string;
  author: Author;
  readTime: string;
  tags?: string[];
};

const PostHeader = ({
  title,
  coverImage,
  created,
  updated,
  author,
  readTime,
  tags,
}: Props) => {
  const breadcrumbs = [LINKS.home, LINKS.posts];

  if (tags.length) {
    tags.forEach((tag) =>
      breadcrumbs.push({
        href: `/posts/?q=${tag}`,
        label: tag,
      })
    );
  }

  return (
    <>
      <Breadcrumbs links={breadcrumbs} />
      <span>{readTime}</span>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">{created}</div>
        {updated && <div className="mb-6 text-lg">{updated}</div>}
      </div>
    </>
  );
};

export default PostHeader;
