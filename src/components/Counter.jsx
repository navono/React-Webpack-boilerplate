import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
  }

  handleIncreament = (e) => {
    this.setState((prevState, porps) => ({
      counter: prevState.counter + 1
    }));
  }

  handleDecreament = (e) => {
    this.setState((prevState, porps) => ({
      counter: prevState.counter - 1
    }));
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>Hello, World! I'm counting...</p>
        <p>{this.props.count}</p>
        <input
          type='button'
          value='increament' 
          onClick={this.props.increase} />
        <input
          type='button'
          value='decrement'
          onClick={this.props.decrease} />
      </div>
    );
  }
}