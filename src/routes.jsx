import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/Home';
import CounterPage from "./containers/Counter";

const AppPage = () => (
  <App>
    <Switch>
      <Route path='/' component={HomePage} />
      <Route path='/counter' component={CounterPage} />
    </Switch>
  </App>
);

export default AppPage;
