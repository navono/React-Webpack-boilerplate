import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    onIncrease: PropTypes.func.isRequired,
    onDecrease: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Hello, World! I&rsquom counting...</p>
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
