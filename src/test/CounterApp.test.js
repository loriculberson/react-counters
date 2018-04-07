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
  //test the increment function causes Counter value to increase
  //test the increment function causes the Total of all counters to increase
  //add counter increases the number of counters by 1
  //delete counter decreases the number of counters by 1
})

