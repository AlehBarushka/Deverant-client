import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/vars.css';

import AppContainer from './containers/AppContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //React.StrictMode - renders components twice on dev!!
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
