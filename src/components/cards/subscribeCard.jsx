import React, { useEffect } from 'react';
import * as cardStyles from './postCard.module.css';
import * as styles from './subscribeCard.module.css';

const SubscribeCard = () => {
  const formName = 'subscribe';

  const submitForm = form => {
    const data = new FormData(form);

    data.append('form-name', formName);

    fetch('/', {
      method: 'POST',
      body: data,
    })
      .then(() => {
        form.innerHTML = `<div class="form--success">Almost there! Check your inbox for a confirmation e-mail.</div>`;
      })
      .catch(error => {
        form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
      });
  };

  useEffect(() => {
    const formElement = document.querySelector(`form[name="${formName}"]`);

    if (!formElement) return;

    formElement.addEventListener('submit', event => {
      event.preventDefault();
      submitForm(formElement);
    });
  }, []);

  const gradientColors = {
    '--gradientA': 'rgba(162,102,246,1)',
    '--gradientB': 'rgba(203,159,249,1)',
  };

  return (
    <div className={cardStyles.link} style={gradientColors}>
      <div className={`animate-colors ${cardStyles.card}`}>
        <form
          className={styles.form}
          name={formName}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
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
