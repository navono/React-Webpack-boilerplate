import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Counter from "./Counter";

// 导出类，按照要求修改
export default class CustomControl {
  constructor(params) {
    this.params = params;
  }

  render() {
    const { id } = this.params;

    return ReactDOM.render(
      <div>
        <Home />
        <Counter />
      </div>,
      document.getElementById(id),
    );
  }
}
