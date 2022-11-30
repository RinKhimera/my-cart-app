import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>Nourris Doggy Drogo</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Essaie de le nourrir"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;
