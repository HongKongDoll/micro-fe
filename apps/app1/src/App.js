import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              flexShrink: 0,
            }}
          >
            <div>
              <Link to="/app1">To app1</Link>
            </div>
            <div>
              <Link to="/app2">To app2</Link>
            </div>
          </div>
          <div
            id="app2"
            style={{
              flexGrow: 1,
            }}
          >
            app1
          </div>
        </div>
      </Router>
    );
  }
}

export default process.env.NODE_ENV === "development"
  ? hot(module)(App)
  : App;
