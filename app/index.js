import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory  } from 'react-router';
import routes from './routes/index.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/index.jsx';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

let store = createStore(todoApp)
let root = document.getElementById('app');
const history = syncHistoryWithStore(browserHistory, store)

const handleChange =  () => {
  console.log('getState',store.getState());
}

let unsubscribe = store.subscribe(handleChange)

handleChange()

//console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>, root
);
