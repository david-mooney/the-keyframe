import React from 'react';
import * as styles from './subscribeCard.module.css';

const SubscribeCard = () => {
  return (
    <div className={styles.card}>
      <form className={styles.form}>
        <h3>Subscribe for the latest posts</h3>
        <input type="email" placeholder="Your email" />
        <button type="button">Subscribe</button>
        <small>I will never share your email and you can unsubscribe at any time</small>
      </form>
    </div>
  );
};

export default SubscribeCard;
