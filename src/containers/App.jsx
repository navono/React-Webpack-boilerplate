import React from "react";
import PropTypes from "prop-types";

export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}
