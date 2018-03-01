import React from 'react';
import Home from './Home';
import Counter from './Counter';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Counter />
      </div>
    )
  }
}
