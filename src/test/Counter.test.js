import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Counter from '../Counter';
import CounterApp from '../CounterApp';

describe('Counter Component', () => {

  
  // it('should render without throwing an error', () => {
  //   expect(shallow(<Counter />).exists(<div className='counter'></div>)).toBe(true)
  // })
  
  // it('renders a name', () => {
  //   expect(shallow(<Counter />).find('.counter-name').length).toEqual(1)
  // })

  // it('renders a value', () => {
  //   expect(shallow(<Counter />).find('.counter-value').length).toEqual(1)
  //  })
  
    // test('shallow wrapper instance should not be null', () => {
    //   const wrapper = shallow(<Counter {...props} />);
    //   const instance = wrapper.instance();

    //     expect(instance).not.toBe(null);
    // });

  // it('starts with a count of 0', () => {
  //   const wrapper = shallow(<Counter />)
  //   const text = wrapper.find('.counter-value').text()
  //   expect(text).toEqual('Val: 0')
  //   // expect(wrapper.props().alerts).toEqual([]);
  // })

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
