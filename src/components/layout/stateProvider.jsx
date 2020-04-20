import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { Provider } from 'react-redux';
import { storageId, saveState } from '../../../localStorage';
import store from '../../../createStore';

const StateProvider = ({ element }) => {
  store.subscribe(
    throttle(() => {
      saveState(storageId, {
        darkMode: store.getState().darkMode,
      });
    }, 1000)
  );

  return <Provider store={store}>{element}</Provider>;
};

StateProvider.propTypes = {
  element: PropTypes.string,
};

export default StateProvider;
