import { createStore, applyMiddleware, compose } from 'redux';
import penderMiddleware from 'redux-pender';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'
import modules from './modules';

const composeEnhancers = process.browser ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

export default function configureStore() {
  const store = createStore(modules, composeEnhancers(applyMiddleware(
    penderMiddleware(),
    thunk,
    logger
  )));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules', () => {
      const nextRootReducer = require('./modules');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}