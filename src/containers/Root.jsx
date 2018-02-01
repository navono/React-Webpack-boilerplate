import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';
import Routes from '../routes';


const Root = ({store, history}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

Root.propTypes  = {
  store: PropTypes.any,
  history: PropTypes.any
};

export default Root;
