import { useRef, useState } from 'react';

export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormState = {
  state: Form;
  message?: string;
};

export const useSubscribe = () => {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputElement = useRef(null);

  async function subscribe(event) {
    // TODO: debounce this
    event.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputElement.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }

    // todo - do I need to clear the input?
    // todo - add the first name field too
    inputElement.current.value = '';

    setForm({
      state: Form.Success,
      message: "Success! You've been added to the list!",
    });
  }

  return { subscribe, inputElement, form };
};

export default useSubscribe;
