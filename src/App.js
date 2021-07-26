import React, { Component } from "react";
import "./App.scss";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import About from "./About/About";
import Cars from "./Cars/Cars";
import CarDetail from "./CarDetail/CarDetail";

class App extends Component {
  state = {
    isLohinIn: false,
  };
  render() {
    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName={"wfm-active"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{ color: "blue" }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "/cars",
                  search: "?a=12&b=777",
                  hash: "wfm-hash",
                }}
              >
                Cars
              </NavLink>
            </li>
          </ul>
        </nav>

        <h3>Is Logged in: {this.state.isLohinIn ? "True" : "False"}</h3>
        <button onClick={() => this.setState({ isLohinIn: true })}>
          Login
        </button>
        <hr />
        <Switch>
          <Route path="/" exact render={() => <h1>Home Page</h1>} />
          {this.state.isLohinIn ? (
            <Route path="/about" component={About} />
          ) : null}

          <Route path="/cars/:name" component={CarDetail} />
          <Route path="/cars" component={Cars} />
          <Redirect to="/" />
          {/* <Route
            render={() => (
              <h1 style={{ color: "red", textAlign: "center" }}>404</h1>
            )}
          /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
