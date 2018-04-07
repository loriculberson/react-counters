import React from 'react';
import './Counter.css';

const Counter = (props) => {
  return (
    <div className="counter">
      <h3 className="counter-name">Counter {props.name}</h3>
      <h3 className="counter-value">Val: {props.value}</h3>
      <button className="increment" onClick={() => props.increment(props.index)}> + </button>
      <button className="decrement" onClick={() => props.decrement(props.index)}> - </button>
      <button onClick={() => props.reset(props.index)}> reset </button>
      <button onClick={() => props.deleteCounter(props.index)}> delete </button>
    </div>
  );
};

export default Counter;

// describe('Button component', () => {
//   const props = {
//     onClick: jest.fn(),
//   };

//   test('should call onClick method from props if onClick was fired', () => {
//     const wrapper = shallow(<Button {...props}>Click on me</Button>);
//     const instance = wrapper.instance(); // null

//     // triger click

//     expect(instance.props.onClick).toHaveBeenCalled() // error, because null has not props property
//   });
// });