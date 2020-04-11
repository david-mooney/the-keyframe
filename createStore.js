import { createStore } from 'redux';
import { loadState } from './localStorage';

export const storageId = 'tpw_state';
export const actions = {
  TOGGLE_STATE: 'TOGGLE_STATE',
};

const persistedState = loadState(storageId);

const reducer = (state = { darkMode: false }, action) => {
  switch (action.type) {
    case actions.TOGGLE_STATE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const store = () =>
  createStore(
    reducer,
    persistedState
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;
