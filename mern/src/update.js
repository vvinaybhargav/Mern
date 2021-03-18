import React, { Component } from "react";
import axios from "axios";

class Update extends Component {
  state = {
    title: "",
  };
  constructor(props) {
    super(props);
    this.uhandleSubmit = this.uhandleSubmit.bind(this);
    this.dhandleSubmit = this.dhandleSubmit.bind(this);
    this.uhandle = this.uhandle.bind(this);
  }
  uhandle = event => {
    this.setState({ title: event.target.value });
  };
  uhandleSubmit = event => {
    console.log(this.props.p_id);
    const id = this.props.p_id;

    axios.patch(`/updateProduct/${id}`, {
      title: this.state.title,
    });
  };
  dhandleSubmit = event => {
    console.log(this.props.p_id);
    const id = this.props.p_id;

    axios.delete(`/deleteProduct/${id}`, (req, res) => {
      res.send("deleted");
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.uhandleSubmit}>
          <input type="text" onChange={this.uhandle}></input>
          <button type="submit">Update</button>
        </form>
        <form onSubmit={this.dhandleSubmit}>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}

export default Update;
