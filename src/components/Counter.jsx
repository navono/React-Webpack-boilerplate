import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Hello, World! I'm counting...</p>
        <p id='count'>{this.props.count}</p>
        <input
          className='button'
          type='button'
          value='increament' 
          onClick={this.props.onIncrease} />
        <input
          className='button'
          type='button'
          value='decrement'
          onClick={this.props.onDecrease} />
      </div>
    );
  }
}
