import React from 'react';
import { render } from 'react-dom';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Root from './components/Root';
import { fetchPosts } from './actions/Post';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //eslint-disable-line

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(
    thunk,
    loggerMiddleware,
  )),
);

store.dispatch(fetchPosts('reactjs'));

render(
  <Root store={store} />,
  document.getElementById('root'),
);
