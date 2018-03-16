import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { AppContainer } from "react-hot-loader";
import App from "./containers/App";

const store = configureStore();
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById("root"),
);

if (module.hot) {
  module.hot.accept();
}
