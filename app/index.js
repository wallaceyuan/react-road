import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory  } from 'react-router';
import routes from './routes/index.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/index.jsx';


let store = createStore(todoApp)
let root = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>, root
);
