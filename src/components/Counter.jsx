import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }

  onIncrease(e) {
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
  }

  onDecrease(e) {
    this.setState((prevState, props) => ({
      count: prevState.count - 1,
    }));
  }

  // 单引号：no-unescaped-entities
  render() {
    return (
      <div>
        <p>{"Hello, World! I'm counting..."}</p>
        <p id="count">{this.state.count}</p>
        <input
          className="button"
          type="button"
          value="increament"
          onClick={this.onIncrease}
        />
        <input
          className="button"
          type="button"
          value="decrement"
          onClick={this.onDecrease}
        />
      </div>
    );
  }
}
