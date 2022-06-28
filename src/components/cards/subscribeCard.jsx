import React, { useEffect, useState } from 'react';
import * as cardStyles from './postCard.module.css';
import * as styles from './subscribeCard.module.css';

const formName = 'subscribe';

const states = {
  loading: 'loading',
  success: 'success',
  existing: 'existing',
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

      console.log('response', response);

      const json = await response.json();

      if (json.subscription?.state === 'active') {
        setState(states.existing);
        return;
      }

      setState(states.success);
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

  if (state === states.existing) {
    return (
      <div className={cardStyles.link} style={gradientColors}>
        <div className={`animate-colors ${cardStyles.card}`}>
          <p>That email is already subscribed</p>
        </div>
      </div>
    );
  }

  if (state === states.error) {
    return (
      <div className={cardStyles.link} style={gradientColors}>
        <div className={`animate-colors ${cardStyles.card}`}>
          <p>Sorry, something went wrong</p>
        </div>
      </div>
    );
  }

  if (state === states.success) {
    return (
      <div className={cardStyles.link} style={gradientColors}>
        <div className={`animate-colors ${cardStyles.card}`}>
          <p>Check your email to confirm your subscription</p>
        </div>
      </div>
    );
  }

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
