import React from 'react';
import './Counter.css';

const Counter = (props) => {
  return (
    <div className="counter">
      <h3 className="counter-name">Counter {props.name}</h3>
      <h3 className="counter-value">Val: {props.value}</h3>
      <button onClick={() => props.increment(props.index)}> + </button>
      <button onClick={() => props.decrement(props.index)}> - </button>
      <button onClick={() => props.reset(props.index)}> reset </button>
      <button onClick={() => props.deleteCounter(props.index)}> delete </button>
    </div>
  );
};

export default Counter;
