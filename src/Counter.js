import React from 'react';
import './Counter.css';

const Counter = ({name, value}) => {
  return (
    <div>
      <h3>Counter {name}</h3>
      <h3>Val: {value}</h3>
    </div>
  );
};

export default Counter;
