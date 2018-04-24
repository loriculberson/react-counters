import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Counter from '../Counter';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


describe('Counter Component', () => {
  it('displays its name', () => {
    const props = {
      name: 1
    };

    const wrapper = shallow(<Counter {...props} />)
    const counterOne= wrapper.find('.counter-name').first()
    const counterName = counterOne.text()

    expect(counterName).toBe(`Counter 1`)
  })

  it('displays its value', () => {
    const props = {
      value: 3
    };

    const wrapper = shallow(<Counter {...props} />)
    const counter = wrapper.find('.counter-value').first()
    const counterValue = counter.text()

    expect(counterValue).toBe(`Val: 3`)
  })

  it('can increment the count when the button is clicked', () => {
    const props = {
      value: 0,
      index: 3,
      increment: jest.fn()
    };

    const wrapper = shallow(<Counter {...props} />)
    const incrementButton = wrapper.find('.increment')
    incrementButton.simulate('click')

    expect(props.increment).toHaveBeenCalledWith(props.index)
  })

  it('can decrement the count when the button is clicked', () => {
    const props = {
      value: 0,
      index: 3,
      decrement: jest.fn()
    };

    const wrapper = shallow(<Counter {...props} />)
    const incrementButton = wrapper.find('.decrement')
    incrementButton.simulate('click')

    expect(props.decrement).toHaveBeenCalledWith(props.index)
  })

  it('can reset counter value to zero when the button is clicked', () => {
    const props = {
      value: 0,
      index: 3,
      reset: jest.fn()
    };

    const wrapper = shallow(<Counter {...props} />)
    const resetButton = wrapper.find('.reset')
    resetButton.simulate('click')

    expect(props.reset).toHaveBeenCalledWith(props.index)
  })
  
  it('can delete a counter when button is clicked', () => {
    const props = {
      value: 0,
      index: 3,
      deleteCounter: jest.fn()
    };

    const wrapper = shallow(<Counter {...props} />)
    const deleteCounterButton = wrapper.find('.delete-counter')
    deleteCounterButton.simulate('click')

    expect(props.deleteCounter).toHaveBeenCalledWith(props.index)
  })

})
