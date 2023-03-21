import { useEffect } from 'react';
import imageZoom from 'fast-image-zoom';
import { KEYS } from '@lib/constants';
import markdownStyles from './markdown.module.css';
import styles from './post-body.module.css';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export const ARTICLE_ID = 'post-article';

const PostBody = ({ children }: Props) => {
  // TODO: replace external script with custom implementation (hook)
  useEffect(() => {
    const zoomInitialized = document.getElementById('image-zoom-styles');

    if (!zoomInitialized) {
      imageZoom({ selector: `#${ARTICLE_ID} img` });
    }
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll(
      `#${ARTICLE_ID} img`
    ) as NodeListOf<HTMLImageElement>;

    const handleKeyDown = (event: KeyboardEvent) => {
      // TODO use my new hook
      if (event.key === KEYS.ENTER || event.key === KEYS.SPACE) {
        event.preventDefault();
        (event.target as HTMLImageElement).click();
      }
    };

    images.forEach((image) => {
      image.setAttribute('tabindex', '0');
      image.addEventListener('keydown', handleKeyDown);
    });
  }, []);
  // TODO: end of horrible code ( I hope)

  return (
    <div id={ARTICLE_ID} className={styles.article}>
      <div className={markdownStyles['markdown']}>{children}</div>
    </div>
  );
};

export default PostBody;
