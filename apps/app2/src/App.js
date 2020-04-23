import React, { Component } from "react";
import { hot } from "react-hot-loader";

class App extends Component {
  render() {
    return <div>app2</div>;
  }
}

export default process.env.NODE_ENV === "development"
  ? hot(module)(App)
  : App;
