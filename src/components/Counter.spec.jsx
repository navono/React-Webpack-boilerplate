import React from 'react';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import Counter from './Counter';

function setup() {
  const actions = {
    onIncrease: spy(),
    onDecrease: spy()
  };

  const component = shallow(
    <Counter count={1} {...actions} />
  );

  return {
    component,
    actions,
    buttons: component.find('.button'),
    p: component.find('#count')
  }
}

describe('Counter component', () => {
  it('should display count', () => {
    const { p } = setup();
    expect(p.text()).toMatch(/^1$/);
  });

  it('should call increment', () => {
    const { p, buttons, actions } = setup();
    buttons.at(0).simulate('click');
    expect(actions.onIncrease.called).toBe(true);
  });

  it('should call decrement', () => {
    const { p, buttons, actions } = setup();
    buttons.at(1).simulate('click');
    expect(actions.onDecrease.called).toBe(true);
  });
})