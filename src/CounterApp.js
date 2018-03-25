import React, { Component } from 'react';
import Counter from './Counter';

class CounterApp extends Component {
  //state here 
  constructor(props) {
    super(props);
    this.state = {
      allValues: [3, 1]
    }
  }

  
  counterValue = (i) => {
    //display what is in state for that index
    return this.state.allValues[i];
  }

  
  render() {
    const total = this.state.allValues.reduce((sum, num) => sum + num)
    const renderCounters = this.state.allValues.map((counter, index) => {
      return (
        <Counter
        name={index + 1}
        key={index}
        value={this.counterValue(index)}
      />
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