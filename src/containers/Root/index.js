import React from 'react';
import App from 'containers/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from 'redux/configureStore';
import 'react-hot-loader/patch'

const store = configureStore();
export const dispatch = store.dispatch

const Root = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router basename='/index.html'>
        <App/>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default Root