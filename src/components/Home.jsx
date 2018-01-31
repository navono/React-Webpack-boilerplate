import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Home</h2>
          <Link to='/counter'>to Counter</Link>
        </div>
      </div>
    );
  }
}

export default Home;
