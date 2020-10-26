import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { wrapStore } from 'webext-redux';
import configureStore from '@containers/Application/configure-store';
import UserCookieReconciler from '@containers/User/components/UserCookieReconciler';
import contextMenusCreator from '@scripts/context-menus-creator';

const store = configureStore();
wrapStore(store);
contextMenusCreator(store);

export default function BackgroundApplication() {
  return (
    <Provider store={store}>
      <UserCookieReconciler>Background application</UserCookieReconciler>
    </Provider>
  );
}

BackgroundApplication.propTypes = {
  children: PropTypes.node,
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<BackgroundApplication />, root);
