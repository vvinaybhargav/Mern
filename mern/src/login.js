import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  validateForm = () => {};

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    var x = document.forms["loginForm"]["email"].value;
    var y = document.forms["loginForm"]["password"].value;
    if (x == "" || y == "") {
      document.getElementById("emptyinput").innerHTML = "!Empty Values";
    }

    const { history } = this.props;
    axios
      .post("/auth", {
        email: this.state.email,
        password: this.state.password,
      })
      .then(res => {
        alert("Login Success");

        history.push("/homepage");
      })
      .catch(
        (document.getElementById("invalidcredentials").innerHTML =
          "Invalid Username or Password")
      );
  };

  render() {
    return (
      <Fragment>
        <h1 className="badge badge-warning" id="emptyinput"></h1>
        <form name="loginForm" onSubmit={this.handleSubmit}>
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
              We'll never share your email with anyone else...
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
          <div className="form-group">
            <p className="badge badge-danger" id="invalidcredentials"></p>
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
