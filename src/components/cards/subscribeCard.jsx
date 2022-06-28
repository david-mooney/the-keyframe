import React, { useEffect, useState } from 'react';
import * as cardStyles from './postCard.module.css';
import * as styles from './subscribeCard.module.css';

const formName = 'subscribe';

const states = {
  loading: 'loading',
  success: 'success',
  error: 'error',
};

const gradientColors = {
  '--gradientA': 'rgba(162,102,246,1)',
  '--gradientB': 'rgba(203,159,249,1)',
};

const SubscribeCard = () => {
  const [state, setState] = useState(null);

  const submitForm = async form => {
    const data = new FormData(form);

    try {
      const response = await fetch('/', { method: 'POST', body: data });
      console.log({ response });

      const json = await response.json();
      console.log({ json });

      setState(states.success);

      if (json.data.subscription?.state === 'active') {
        /* TODO - already subscribed */
      }
    } catch (error) {
      setState(states.error);
      console.warn('[Form]', error);
    }
  };

  useEffect(() => {
    const formElement = document.querySelector(`form[name="${formName}"]`);

    if (!formElement) return;

    formElement.addEventListener('submit', event => {
      event.preventDefault();
      submitForm(formElement);
    });
  }, []);

  console.log('state', state);

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
          <h3>Stay up to date</h3>

          <label className="not-displayed">
            Are you a human? <input name="bot-field" />
          </label>

          <div className={styles.inputs}>
            <input type="hidden" name="form-name" value={formName} />
            <input
              type="text"
              name="first_name"
              className={`animate-colors ${styles.input}`}
              placeholder="First name (optional)"
            />
            <input
              type="email"
              className={`animate-colors ${styles.input}`}
              name="email"
              placeholder="Email address"
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeCard;
