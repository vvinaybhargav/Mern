import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { history } = this.props;
    axios
      .post("/auth", {
        email: this.state.email,
        password: this.state.password,
      })
      .then(res => {
        console.log(res.data);
        function myFunction() {
          alert("Hello! I am an alert box!");
        }
        history.push("/homepage");
      });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

export default Login;
