import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { saveState } from '../../../localStorage';
import createStore, { storageId } from '../../../createStore';

const StateProvider = ({ element }) => {
  const store = createStore();

  // FIXME: throttle
  store.subscribe(() => {
    saveState(storageId, {
      darkMode: store.getState().darkMode,
    });
  });

  return <Provider store={store}>{element}</Provider>;
};

StateProvider.propTypes = {
  element: PropTypes.string,
};

export default StateProvider;
