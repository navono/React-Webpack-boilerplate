import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { Increase, Decrease } from "../actions";

const mapStateToProps = state => {
  // 这里可以做其他的逻辑处理，将处理后的结果传递给展示控件的`props`
  return {
    count: state.Counter.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrease: () => dispatch(Increase()),
    onDecrease: () => dispatch(Decrease())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
