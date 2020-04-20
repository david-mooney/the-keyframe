import React from 'react';
import StateProvider from '@components/layout/stateProvider';
import LayoutWrapper from '@components/layout/layoutWrapper';

export const wrapRootElement = StateProvider;
export const wrapPageElement = data => <LayoutWrapper {...data} />;
