import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Counter from '../Counter';

describe('Counter Component', () => {
 
  it('should render without throwing an error', () => {
    expect(shallow(<Counter />).exists(<div className='counter'></div>)).toBe(true)
  })
  
  it('renders a name', () => {
    expect(shallow(<Counter />).find('.counter-name').length).toEqual(1)
  })

  it('renders a value', () => {
    expect(shallow(<Counter />).find('.counter-value').length).toEqual(1)
   })

})
