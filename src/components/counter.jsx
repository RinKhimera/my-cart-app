import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  render() {
    return (
      <div>
        <span className="m-2">{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Augmente
        </button>
      </div>
    );
  }

  handleIncrement = () => this.setState({ count: this.state.count + 1 });

  formatCount() {
    return this.state.count;
  }
}

export default Counter;
