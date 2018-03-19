import React from "react";
import { Route, Link } from "react-router-dom";
import App from "./containers/App";
import HomePage from "./containers/Home";
import CounterPage from "./containers/Counter";

// 如果在 Route 中不使用 exact。则会导致 / 之后的都会匹配
const AppPage = () => (
  <App>
    <div>
      <header>
        <Link to="/">Home </Link>
        <br />
        <Link to="/counter">Counter</Link>
      </header>

      <main>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/counter" component={CounterPage} />
      </main>
    </div>
  </App>
);

export default AppPage;
