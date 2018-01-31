import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';
// import Routes from '../routes';

import { Route } from 'react-router';
import HomePage from '../containers/Home';
import CounterPage from "../containers/Counter";


export const Root = ({store, history}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* <Routes /> */}
      <div>
        <Route path='/' component={HomePage} />
        <Route path='/counter' component={CounterPage} />
      </div>
    </ConnectedRouter>
  </Provider>
);

Root.propTypes  = {
  store: PropTypes.any,
  history: PropTypes.any
};

// console.log(RootPage);

// export default RootPage;
