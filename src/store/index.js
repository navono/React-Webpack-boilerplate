import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}
const history = createBrowserHistory();
middleware.push(routerMiddleware(history));

const enhancers = [];

// 调试工具
if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension);
  }
}

const composeEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

function configureStore(preLoadedState) {
  const store = createStore(rootReducer, preLoadedState, composeEnhancers);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export { history, configureStore };
