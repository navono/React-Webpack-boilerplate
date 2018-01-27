import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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