import React from 'react';
import * as cardStyles from './postCard.module.css';
import * as styles from './subscribeCard.module.css';

const SubscribeCard = () => {
  const formName = 'subscribe';
  // const emailForm = document.querySelector('.email-form');
  // if (emailForm) {
  //   emailForm.addEventListener('submit', e => {
  //     e.preventDefault();
  //     processForm(emailForm);
  //   });
  // }

  const gradientColors = {
    '--gradientA': 'rgba(162,102,246,1)',
    '--gradientB': 'rgba(203,159,249,1)',
  };

  return (
    <div className={cardStyles.link} style={gradientColors}>
      <div className={`animate-colors ${cardStyles.card}`}>
        <form className={styles.form} name={formName} method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value={formName} />
          <h3>Subscribe for the latest posts</h3>
          <input type="email" name="email" placeholder="Your email" required />
          <button type="submit">Subscribe</button>
          <small>I will never share your email and you can unsubscribe at any time</small>
        </form>
      </div>
    </div>
  );
};

export default SubscribeCard;
