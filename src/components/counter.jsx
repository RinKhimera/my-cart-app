import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Augmente
        </button>
      </div>
    );
  }

  handleIncrement = () => this.setState({ value: this.state.value + 1 });

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    if (this.state.value === 0) {
      return (classes += "warning");
    } else {
      return (classes += "primary");
    }
  }

  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
