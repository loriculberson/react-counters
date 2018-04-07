import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Counter from '../Counter';
import CounterApp from '../CounterApp';

describe('Counter Component', () => {

  it('has a name', () => {
    const props = {
      name: 1
    };

    const wrapper = mount(<Counter {...props} />)
    const counterOne= wrapper.find('.counter-name').first()
    const counterName = counterOne.text()

    expect(counterName).toBe(`Counter 1`)
  })

  it('can increment the count when the button is clicked', () => {
    const props = {
      value: 0,
      index: 3,
      increment: jest.fn()
    };

    const wrapper = mount(<Counter {...props} />)
    const incrementButton = wrapper.find('.increment')
    incrementButton.simulate('click')

    expect(props.increment).toHaveBeenCalledWith(props.index)
  })

})
