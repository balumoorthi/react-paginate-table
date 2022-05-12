import React from 'react';

import ReactDOM from 'react-dom';

// router
import { BrowserRouter as Router } from 'react-router-dom';

// redux store
import { Provider } from 'react-redux';

import appStore from 'shared/store';

// components
import App from './App';

// styles

import './App.less';

import './index.scss';

// theme

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
