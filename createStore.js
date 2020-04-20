import { createStore } from 'redux';

export const actions = {
  SET_STATE: 'SET_STATE',
  TOGGLE_STATE: 'TOGGLE_STATE',
};

const reducer = (state = { darkMode: false }, { type, value }) => {
  switch (type) {
    case actions.SET_STATE:
      return { ...state, darkMode: value };
    case actions.TOGGLE_STATE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

export default createStore(reducer);
