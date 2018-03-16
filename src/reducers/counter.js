import Command from "../actions/commands";

// 针对各种操作命令，更新各个命令对应的状态
export default (state = { count: 0 }, action) => {
  switch (action.type) {
    case Command.Increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case Command.Decrement:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
