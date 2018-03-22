import React from "react";
import { Button } from "antd";
import LogInterface from "../interface/mockInterface";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentWillMount() {
    this.logInterface = new LogInterface(
      "ws://192.168.56.4:2014",
      this.onReceiveMsg,
    );
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

  onReceiveMsg = data => {
    console.log(data);
  };

  onSendMsg = () => {
    if (this.logInterface) {
      const option = {
        options: {
          starttime: "2018-03-21T00:00:00.000Z",
          endtime: "2018-03-21T10:00:00.000Z",
        },
        callID: 3,
        method: "ReadLog",
      };

      this.logInterface.send(JSON.stringify(option));
    }
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
        <Button type="primary" onClick={this.onSendMsg}>
          test_ws
        </Button>
      </div>
    );
  }
}
