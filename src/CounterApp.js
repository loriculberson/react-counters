import React, { Component } from 'react';
import Counter from './Counter';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allValues: [0]
    }
  }
  
  counterValue = (i) => {
    //display what is in state for that index
    //QUESTION: Why with an arrow function does this value have to be returned? 
    //Without it, the individual counter value does not appear.
    return this.state.allValues[i];
  }

  //QUESTION: How can these functions be refactored? Lots of repeated code. 
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

  reset = (i) => {
    const values = this.state.allValues.slice();
    values[i] = 0;
    this.setState({
      allValues: values
    })
  }

  newCounter = () => {
    //push a 0 value into the allValues array
    this.setState({ allValues: [...this.state.allValues, 0] })

    //ALTERNATIVE
    // const values = this.state.allValues.slice();
    // values.push(0)
    // this.setState({
    //   allValues: values
    // })
  }

  render() {
    const total = this.state.allValues.reduce((sum, num) => sum + num)
    const renderCounters = this.state.allValues.map((counter, index) => {
      return (
        <div className="counter">
          <Counter
            key={index}
            name={index + 1}
            value={this.counterValue(index)}
          />
          <button onClick={() => this.increment(index)}> + </button>
          <button onClick={() => this.decrement(index)}> - </button>
          <button onClick={() => this.reset(index)}> reset </button>
      </div>
      )
    })

    //QUESTION:
    //What's the rule for onClick functions -- when you preface it with ()=> and when you do not.
    return (
      <div>
        <div>
          {renderCounters}
          <h2>Total: {total}</h2>
          <button onClick={this.newCounter} className="add-counter"> add new counter </button>
        </div>
      </div>
    );
  }
}

export default CounterApp;