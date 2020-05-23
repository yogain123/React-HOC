import React, { Component } from "react";
import withCounter from "./withCounter";

class clickcounter extends Component {
  render() {
    const { name, count, incrementCount } = this.props;
    return (
      <React.Fragment>
        <button onClick={() => incrementCount()}>Click</button>
        <br />
        {count} clicks by {name}
      </React.Fragment>
    );
  }
}

export default withCounter(clickcounter);
