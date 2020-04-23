import React, { Component } from "react";
import { hot } from "react-hot-loader";

class App extends Component {
  state = {
    count: 1,
  };

  render() {
    return (
      <div
        onClick={() =>
          this.setState({
            count: this.state.count + 1,
          })
        }
      >
        app {this.state.count}
      </div>
    );
  }
}

export default process.env.NODE_ENV === "development"
  ? hot(module)(App)
  : App;
