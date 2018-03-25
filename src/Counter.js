import React from 'react';
import './Counter.css';

const Counter = (props) => {
  console.log(props)
  return (
    <div>
      <h3>Counter {props.name}</h3>
      <h3>{props.counterValue}</h3>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
};

export default Counter;