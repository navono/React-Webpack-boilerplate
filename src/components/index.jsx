import React from "react";
import Home from "./Home";
import Counter from "./Counter";
import AdvancedSerch from "./AdvancedSerch";

export default class App extends React.Component {
  handleFieldChange = changedFields => {
    console.log(changedFields);
  };

  render() {
    const values = {
      value: 111,
    };
    return (
      <div>
        <Home />
        <Counter />
        <AdvancedSerch values={values} onChange={this.handleFieldChange} />
      </div>
    );
  }
}
