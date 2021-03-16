import React, { Component } from "react";
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
        history.push("/homepage");
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <input type="text" name="email" onChange={this.handleChange}></input>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
