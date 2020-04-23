import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/app2">To app2</Link>
      </Router>
    );
  }
}

export default process.env.NODE_ENV === "development"
  ? hot(module)(App)
  : App;
