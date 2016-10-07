/* global document */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from './routes';
import reducer from './reducers';
import * as actions from './actions';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
