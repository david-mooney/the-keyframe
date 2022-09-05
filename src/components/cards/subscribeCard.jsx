import React, { useState } from 'react';
import Loader from '../loader';
import { FiMail } from '@react-icons/all-files/fi/FiMail';
import * as styles from './subscribeCard.module.css';

const timeout = 5000;
const formName = 'subscribe';

const states = {
  loading: 'loading',
  success: 'success',
  error: 'error',
};

const SubscribeCard = ({ showTitle = true }) => {
  const [state, setState] = useState(null);
  const [message, setMessage] = useState('Something went wrong');

  const submitForm = async event => {
    event.preventDefault();
    setState(states.loading);

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
        throw new Error('This email is already subscribed.');
      }

      setState(states.success);
      setTimeout(() => setState(null), timeout);
    } catch (error) {
      setState(states.error);
      setMessage('Sorry, something went wrong.\n Please try again.');
      setTimeout(() => setState(null), timeout);
    }
  };

  const renderLoader = () => (
    <div className={`${styles.center} ${styles.appear}`}>
      <Loader />
    </div>
  );

  const renderSuccess = () => (
    <div className={`${styles.center} ${styles.appear}`}>
      <span>Check your email to confirm your subscription</span>
    </div>
  );

  const renderError = () => (
    <div className={`${styles.center} ${styles.appear}`}>
      <span>{message}</span>
    </div>
  );

  return (
    <div
      className={styles.link}
      aria-live="polite"
      aria-busy={state === states.loading}
    >
      <div className={styles.card} data-animate="true">
        {state === states.loading && renderLoader()}
        {state === states.success && renderSuccess()}
        {state === states.error && renderError()}

        <form
          className={styles.form}
          name={formName}
          method="POST"
          data-state={state}
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={submitForm}
        >
          {showTitle && <h3>Stay up to date</h3>}

          <label className={styles.honeyPot}>
            Are you a human? <input name="bot-field" />
          </label>

          <div className={styles.inputs}>
            <div className={styles.container}>
              <input
                type="email"
                className={styles.input}
                data-animate="true"
                name="email"
                placeholder="Email address"
                required
              />
              <div className={styles.icon} data-animate="true">
                <FiMail />
              </div>
            </div>
            <button type="submit" className={styles.button}>
              Subscribe
            </button>
          </div>

          <div className={styles.footer}>
            <a
              target="_blank"
              className="underline"
              rel="noopener noreferrer"
              href="privacy#data-retention"
            >
              Privacy Policy
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeCard;
