import React, { useState } from 'react';
import * as cardStyles from './postCard.module.css';
import * as styles from './subscribeCard.module.css';

const formName = 'subscribe';

const states = {
  loading: 'loading',
  success: 'success',
  existing: 'existing',
  error: 'error',
};

const SubscribeCard = () => {
  const [state, setState] = useState(null);

  const submitForm = async event => {
    event.preventDefault();
    const form = document.querySelector(`form[name="${formName}"]`);
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');

    try {
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        body: JSON.stringify({ name, email }),
      });
      const json = await response.json();

      if (json.subscription?.state === 'active') {
        setState(states.existing);
        return;
      }

      setState(states.success);
    } catch (error) {
      setState(states.error);
      console.warn(`[${formName} form]`, error);
    }
  };

  if (state === states.existing) {
    return (
      <div className={cardStyles.link}>
        <div className={`animate-colors ${cardStyles.card}`}>
          <p>That email is already subscribed</p>
        </div>
      </div>
    );
  }

  if (state === states.error) {
    return (
      <div className={cardStyles.link}>
        <div className={`animate-colors ${cardStyles.card}`}>
          <p>Sorry, something went wrong</p>
        </div>
      </div>
    );
  }

  if (state === states.success) {
    return (
      <div className={cardStyles.link}>
        <div className={`animate-colors ${cardStyles.card}`}>
          <p>Check your email to confirm your subscription</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cardStyles.link}>
      <div className={`animate-colors ${cardStyles.card}`}>
        <form
          className={styles.form}
          name={formName}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={submitForm}
        >
          <h3>Stay up to date</h3>

          <label className={styles.honeyPot}>
            Are you a human? <input name="bot-field" />
          </label>

          <div className={styles.inputs}>
            <input type="hidden" name="form-name" value={formName} />
            <input
              type="text"
              name="name"
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
          <a
            className="underline"
            href="privacy#data-retention"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </form>
      </div>
    </div>
  );
};

export default SubscribeCard;
