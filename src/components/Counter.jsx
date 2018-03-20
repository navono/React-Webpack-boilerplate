import React from "react";
import { Button } from "antd";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onIncrease = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  onDecrease = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <p>{"Hello, World! I'm counting..."}</p>
        <p id="count">{this.state.count}</p>
        <Button type="primary" onClick={this.onIncrease}>
          increament
        </Button>
        <Button type="primary" onClick={this.onDecrease}>
          decrement
        </Button>
      </div>
    );
  }
}
