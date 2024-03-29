import React from 'react';
import useScrollSpy from '@hooks/use-scroll-spy';
import useProgress from '@hooks/use-progress';
import ProgressBar from '@components/table-of-contents/progress-bar';
import styles from './table-of-contents.module.css';

const TableOfContents = ({ sections, target }) => {
  const elements = sections.map(({ element }) => element);
  const [activeIndex] = useScrollSpy(elements, { offset: 0 });
  const progress = useProgress({ target });
  const isVisible = progress > 0 && progress < 1;

  return (
    <div className={styles.container} data-visible={isVisible}>
      <ProgressBar progress={progress} />
      <div className={styles.sections}>
        {sections.map(({ element, title }, index) => (
          <a
            key={title}
            href={`#${element.id}`}
            className={index === activeIndex ? styles.active : ''}
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;
