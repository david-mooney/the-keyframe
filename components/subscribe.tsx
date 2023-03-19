import Link from 'next/link';
import { useState, useEffect } from 'react';
import useSubscribe, { Form } from '@hooks/use-subscribe';
import styles from '@components/subscribe.module.css';

const Subscribe = () => {
  const [formReady, setFormReady] = useState(false);
  const { form, subscribe, inputElement } = useSubscribe();

  useEffect(() => {
    // wait for Netlify to update the honey-pot field to prevent hydration mismatch
    setFormReady(true);
  }, []);

  const conditionalButtonText = () => {
    if (form.state === Form.Initial) {
      return 'Subscribe';
    } else if (form.state === Form.Loading) {
      return 'Loading...';
    } else if (form.state === Form.Success) {
      return 'Subscribed!';
    } else if (form.state === Form.Error) {
      return 'Something went wrong';
    }
  };

  return (
    formReady && (
      <div className={styles.wrapper}>
        <h2>Get notified about new posts</h2>
        <p>No spam, unsubscribe at any time</p>
        <form
          onSubmit={subscribe}
          data-netlify="true"
          netlify-honeypot="bot-field"
          className={styles.form}
        >
          <input
            className={styles.input}
            ref={inputElement}
            placeholder="Email Address"
            type="email"
            autoComplete="email"
            required
          />

          <label className={styles['honey-pot']}>
            Be you robot or human? <input name="bot-field" />
          </label>

          <button type="submit" className={styles.button} data-animate="true">
            {conditionalButtonText()}
          </button>
        </form>

        <div className={styles.footer}>
          <Link className="underline" href="/privacy#data-retention">
            Privacy Policy
          </Link>
        </div>
      </div>
    )
  );
};

export default Subscribe;
