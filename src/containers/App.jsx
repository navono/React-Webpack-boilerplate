import React from 'react';
import PropTypes from 'prop-types';
import "./App.css"

export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}