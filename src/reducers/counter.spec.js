import counter from "./counter";
// import { Increase, Decrease } from '../actions/index';
import Command from "../actions/commands";

describe("reducers", () => {
  describe("counter", () => {
    it("should handle initial state", () => {
      expect(counter(undefined, { type: "unknown" }).count).toBe(0);
    });

    it("should handle INCREMENT_COUNTER", () => {
      expect(counter({ count: 1 }, { type: Command.Increment }).count).toBe(2);
    });

    it("should handle DECREMENT_COUNTER", () => {
      expect(counter({ count: 1 }, { type: Command.Decrement }).count).toBe(0);
    });
  });
});
