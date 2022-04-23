import React from 'react';
import Slider from 'react-slider';
import * as styles from './scrollBar.module.css';

const ScrollBar = () => {
  return (
    <Slider
      className={styles.slider}
      thumbClassName={styles.thumb}
      trackClassName={styles.track}
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
  );
};

export default ScrollBar;
