import React from 'react';
import { Provider } from "react-redux";
import { mount } from 'enzyme';
import App from './App';
import configureStore from "../store";

function setup(initialState) {
  const store = configureStore(initialState);
  const app = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  return {
    app,
    buttons: app.find('.button'),
    p: app.find('#count')
  };
}

describe('App', () => {
  it('should display count', () => {
    const { p } = setup();
    expect(p.text()).toMatch(/^0$/);
  });

  it('should call increment', () => {
    const { p, buttons } = setup();
    buttons.at(0).simulate('click');
    expect(p.text()).toMatch(/^1$/);
  });

  it('should call decrement', () => {
    const { p, buttons, actions } = setup();
    buttons.at(1).simulate('click');
    expect(p.text()).toMatch(/^-1$/);
  });
})
