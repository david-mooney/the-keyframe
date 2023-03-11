import Breadcrumbs from '@components/breadcrumbs';
import DateFormatter from '@components/date-formatter';
import CoverImage from '@components/cover-image';
import PostTitle from './post-title';
import Avatar from './avatar';
import type Author from '@interfaces/author';
import { LINKS } from '@lib/constants';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  readTime: string;
  tags?: string[];
};

const PostHeader = ({
  title,
  coverImage,
  date,
  author,
  readTime,
  tags,
}: Props) => {
  const breadcrumbs = [LINKS.home, LINKS.tags];

  if (tags.length) {
    tags.forEach((tag) =>
      breadcrumbs.push({
        href: `/all-posts/${tag}`,
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
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
