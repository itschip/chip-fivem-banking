import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'containers/App';

import WindowListener from 'containers/WindowListener';
import Screen from "./components/screen/screen";

import configureStore from './configureStore';
import HeaderComponent from "./components/header";

const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <WindowListener>
        <>
          <App />
        </>
      </WindowListener>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
