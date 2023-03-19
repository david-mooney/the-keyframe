import Link from 'next/link';
import Post from '@interfaces/post';
import styles from './posts-timeline.module.css';

type Props = {
  posts: Post[];
};

const AllPosts = ({ posts }: Props) => {
  const postsByYear = posts.reduce((acc, post) => {
    const [day, month, year] = post.created.split(' ');
    const key = `${day} ${month}`;

    acc[year] = acc[year]
      ? [...acc[year], { [key]: [post] }]
      : [{ [key]: [post] }];

    return acc;
  }, {});

  return (
    <div>
      {Object.keys(postsByYear)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => (
          <div key={year}>
            <h3>{year}</h3>
            {postsByYear[year].map((post) => {
              const [day, month] = Object.keys(post)[0].split(' ');
              const postObj = post[`${day} ${month}`][0];

              return (
                <Link
                  href={`/posts/${postObj.slug}`}
                  key={postObj.slug}
                  className={styles.container}
                >
                  <div className={styles.date}>
                    {day} {month}
                  </div>

                  <div className={styles.title}>
                    <h4 className={styles.underline}>{postObj.title}</h4>
                  </div>

                  <span className={`${styles.underline} ${styles.button}`}>
                    Read More
                  </span>
                </Link>
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default AllPosts;
