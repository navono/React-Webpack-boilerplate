import Commands from "./commands";

export const Increase = () => ({
  type: Commands.Increment
});

export const Decrease = () => ({
  type: Commands.Decrement
});
