import React, { Component } from "react";

// Define state type
interface CounterState {
  count: number;
}

// Class component with state in TypeScript
class Counter extends Component<{}, CounterState> {
  // Defining state with type annotation
  state: CounterState = {
    count: 0,
  };

  // Function to increment the count
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
