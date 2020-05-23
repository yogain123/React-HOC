import React from "react";
import PropTypes from "prop-types";

export default (WrappedComponent) => {
  class hocComponent extends React.Component {
    state = {
      count: 0,
      name: "yogendra",
    };

    incrementCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    componentDidMount() {
      document.querySelector("head>title").innerHTML = this.state.count;
    }

    componentDidUpdate() {
      console.log(this.state);
      document.querySelector("head>title").innerHTML = this.state.count;
    }

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          name={this.state.name}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return hocComponent;
};
