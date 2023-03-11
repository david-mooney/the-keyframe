import { useEffect } from 'react';
import imageZoom from 'fast-image-zoom';
import { KEYS } from '@lib/constants';
import markdownStyles from './markdown.module.css';
import styles from './post-body.module.css';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  useEffect(() => {
    // TODO: replace external script with custom implementation (hook)
    const zoomInitialized = document.getElementById('image-zoom-styles');

    if (!zoomInitialized) {
      imageZoom({ selector: '.post-article img' });
    }
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll(
      '.post-article img'
    ) as NodeListOf<HTMLImageElement>;

    const handleKeyDown = (event: KeyboardEvent) => {
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

  return (
    <div className={`post-article ${styles.article}`}>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
