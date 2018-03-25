import React, { Component } from 'react';
import Counter from './Counter';

class CounterApp extends Component {
  //state here 
  constructor(props) {
    super(props);
    this.state = {
      allValues: 0
    }
  }

  increment = () => {
    this.setState({
      allValues: this.state.allValues + 1
    })
  }

  decrement = () => {
    this.setState({
      allValues: this.state.allValues - 1
    })
  }

  reset = () => {
    this.setState({
      allValues: 0
    })
  }

  render() {
    return (
      <div>
        <Counter
          name={"1"}
          increment={this.increment}
          decrement={this.decrement}
          reset={this.reset}
          counterValue={this.state.allValues}
        />
      </div>
    );
  }
}

export default CounterApp;