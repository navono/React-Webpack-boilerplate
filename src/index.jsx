import React from 'react';
import { render } from 'react-dom';
import { configureStore, history } from './store';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';

const initState = { Counter: { count: 10 } };
const store = configureStore(initState);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);


if (module.hot) {
  module.hot.accept();

  // module.hot.accept('./containers/Root', () => {
  //   const NextRoot = require('./containers/Root').default;
  //   render(
  //     <AppContainer>
  //       <NextRoot store={store} history={history} />
  //     </AppContainer>,
  //     document.getElementById('root')
  //   );
  // });
}
