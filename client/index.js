
import React from 'react';
import { render } from 'react-dom'
import App from './components/app';
import store from './store/store.js';
import { Provider } from 'react-redux';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)