import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import Counter from "./Counter";
import configureStore from "../store";

function setup(initialState) {
  const store = configureStore(initialState);
  const counter = mount(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

  return {
    counter,
    buttons: counter.find(".button"),
    p: counter.find("#count")
  };
}

describe("containers", () => {
  describe("Counter", () => {
    it("should display initial count", () => {
      const { p } = setup();
      expect(p.text()).toMatch(/^0$/);
    });

    it("should display updated count after increment button click", () => {
      const { buttons, p } = setup();
      buttons.at(0).simulate("click");
      expect(p.text()).toMatch(/^1$/);
    });

    it("should display updated count after descrement button click", () => {
      const { buttons, p } = setup();
      buttons.at(1).simulate("click");
      expect(p.text()).toMatch(/^-1$/);
    });
  });
});
