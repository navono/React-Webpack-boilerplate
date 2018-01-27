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

    console.log(this.state);
  }

  handleDecreament = (e) => {
    console.log(this.state);

    this.setState((prevState, porps) => ({
      counter: prevState.counter - 1
    }));
  }

  render() {
    return (
      <div>
        <p>Hello, World! I'm counting...</p>
        <p>{this.state.counter}</p>
        <input
          type='button'
          value='increament' 
          onClick={this.handleIncreament} />
        <input
          type='button'
          value='decrement'
          onClick={this.handleDecreament} />
      </div>
    );
  }
}