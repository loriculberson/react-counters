import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CounterApp from '../CounterApp';
import Counter from '../Counter';

describe('CounterApp Component', () => {
  it('initializes Counter starting value at 0', () => {
    //use mount when you need to access the child nodes aka Counter. 
    //Counter is the child to CounterApp
    const wrapper = mount(<CounterApp />)
    const counter = wrapper.find(Counter)
    
    expect(counter).toHaveProp({ value: 0})
  })
  
  it('increases the value when Counter increment button is clicked', () => {
    const wrapper = mount(<CounterApp />)
    let counter = wrapper.find(Counter)
    const incrementButton = counter.find('.increment')
    incrementButton.simulate('click')
    counter = wrapper.find(Counter)
    
    expect(counter).toHaveProp({ value: 1})
    
    incrementButton.simulate('click')
    incrementButton.simulate('click')
    
    counter = wrapper.find(Counter)
    expect(counter).toHaveProp({ value: 3})
  })

  it('decreases the value when Counter decrement button is clicked', () => {
    const wrapper = mount(<CounterApp />)
    let counter = wrapper.find(Counter)

    const decrementButton = counter.find('.decrement')
    decrementButton.simulate('click')
    counter = wrapper.find(Counter)
    
    expect(counter).toHaveProp({ value: -1})
    
    decrementButton.simulate('click')
    decrementButton.simulate('click')
    
    counter = wrapper.find(Counter)
    expect(counter).toHaveProp({ value: -3})
  })

  it('resets the value of a single Counter to zero', () => {
    const wrapper = mount(<CounterApp />)
    let counter = wrapper.find(Counter)

    const incrementButton = counter.find('.increment')
    incrementButton.simulate('click')
    incrementButton.simulate('click')

    counter = wrapper.find(Counter)
    expect(counter).toHaveProp({ value: 2})

    const resetButton = counter.find('.reset')
    resetButton.simulate('click')
    counter = wrapper.find(Counter)
    
    expect(counter).toHaveProp({ value: 0})
  })

  it('initializes multiple Counters', () => {
    const wrapper = mount(<CounterApp />)
    let counter = wrapper.find(Counter)
    
    expect(counter.length).toBe(1)
    
    const addCounterButton = wrapper.find('.add-counter')
    addCounterButton.simulate('click')
    
    counter = wrapper.find(Counter)
    expect(counter.length).toBe(2)
  })

  it('deletes Counters', () => {
    const wrapper = mount(<CounterApp />)
    let counter = wrapper.find(Counter)

    expect(counter.length).toBe(1)
    
    const addCounterButton = wrapper.find('.add-counter')
    addCounterButton.simulate('click')
    
    counter = wrapper.find(Counter)
    expect(counter.length).toBe(2)
    
    const deleteCounterButton = wrapper.find(".delete-counter").last()
    deleteCounterButton.simulate('click')
    
    counter = wrapper.find(Counter)
    expect(counter.length).toBe(1)
  })


  it('displays the sum of all counters', () => {
    const wrapper = mount(<CounterApp />)
    let counter = wrapper.find(Counter)
    const incrementButton = counter.first().find('.increment')
    incrementButton.simulate('click')
    incrementButton.simulate('click')
    incrementButton.simulate('click')
    
    const addCounterButton = wrapper.find('.add-counter')
    addCounterButton.simulate('click')
    
    counter = wrapper.find(Counter)

    const incrementButton2 = counter.last().find('.increment')
    incrementButton2.simulate('click')
    incrementButton2.simulate('click')

    const counterTotal = wrapper.find('.counter-total')
    const counterTotalText = counterTotal.text()

    expect(counterTotalText).toBe('Total: 5')
  })
})

