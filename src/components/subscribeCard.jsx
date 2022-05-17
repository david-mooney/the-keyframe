import React from 'react';
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

  return (
    <div className={styles.card}>
      <form className={styles.form} name={formName} method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value={formName} />
        <h3>Subscribe for the latest posts</h3>
        <input type="email" name="email" placeholder="Your email" required />
        <button type="submit">Subscribe</button>
        <small>I will never share your email and you can unsubscribe at any time</small>
      </form>
    </div>
  );
};

export default SubscribeCard;
