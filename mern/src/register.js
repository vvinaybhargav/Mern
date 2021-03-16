import axios from "axios";
import React, { Component, Fragment } from "react";

class Register extends Component {
  state = {
    name: "",
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
      .post("register", {
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
      })
      .then(res => {
        console.log(res.data);
        history.push("/login");
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          <input type="text" name="name" onChange={this.handleChange}></input>
          <input
            type="text"
            name="password"
            onChange={this.handleChange}
          ></input>
          <input type="text" name="email" onChange={this.handleChange}></input>
          <button type="submit">button</button>
        </form>
      </div>
    );
  }
}
export default Register;
