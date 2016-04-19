import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppComponent from './AppComponent.jsx';
import configureStore from './store';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('app'));
