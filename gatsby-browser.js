import 'prismjs/themes/prism.css';
import React from 'react';
import StateProvider from '@components/layout/stateProvider';
import LayoutWrapper from '@components/layout/layoutWrapper';
import store, { actions } from './createStore';
import { storageId, loadState } from './localStorage';

export const onInitialClientRender = () => {
  const { darkMode = false } = loadState(storageId);

  store.dispatch({
    type: actions.SET_STATE,
    value: darkMode,
  });
};

export const wrapRootElement = StateProvider;
export const wrapPageElement = data => <LayoutWrapper {...data} />;
