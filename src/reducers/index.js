import { combineReducers } from "redux";
import CounterReducers from "./counter";

const rootReducer = combineReducers({
  Counter: CounterReducers
});

export default rootReducer;
