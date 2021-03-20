import { Fragment } from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <h1>Home</h1>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/customer">Customer</Link>
      </Fragment>
    );
  }
}

export default Home;
