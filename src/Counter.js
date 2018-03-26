import React from 'react';
import './Counter.css';

const Counter = ({name, value}) => {
  return (
    <div className="counter">
      <h3 className="counter-name">Counter {name}</h3>
      <h3 className="counter-value">Val: {value}</h3>
    </div>
  );
};

export default Counter;
