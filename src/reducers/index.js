import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import CounterReducers from "./counter";

const rootReducer = combineReducers({
  router: routerReducer,
  Counter: CounterReducers,
});

export default rootReducer;
