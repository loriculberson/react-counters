import React from 'react';
import './Counter.css';

const Counter = (props) => {
  console.log(props)
  return (
    <div>
      <h3>Counter {props.name}</h3>
      <h3>Val: {props.value}</h3>

    </div>
  );
};

export default Counter;
