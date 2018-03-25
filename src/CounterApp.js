import React, { Component } from 'react';
import Counter from './Counter';

class CounterApp extends Component {
  //state here 
  constructor(props) {
    super(props);
    this.state = {
      allValues: [0, 5]
    }
  }
  
  counterValue = (i) => {
    //display what is in state for that index
    return this.state.allValues[i];
  }

  increment = (i) => {
    const values = this.state.allValues.slice();
    values[i] = this.state.allValues[i] + 1;
    this.setState({
      allValues: values
    })
  }
  
  decrement = (i) => {
    const values = this.state.allValues.slice();
    values[i] = this.state.allValues[i] - 1;
    this.setState({
      allValues: values
    })
  }
  
  render() {
    const total = this.state.allValues.reduce((sum, num) => sum + num)
    const renderCounters = this.state.allValues.map((counter, index) => {
      return (
        <div>
          <Counter
            key={index}
            name={index + 1}
            value={this.counterValue(index)}
          />
          <button onClick={() => this.increment(index)}> + </button>
          <button onClick={() => this.decrement(index)}> - </button>
      </div>
      )
    })

    return (
      <div>
        <div>
          {renderCounters}
          <h2>Total: {total}</h2>
        </div>
      </div>
    );
  }
}

export default CounterApp;