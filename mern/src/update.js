import React, { Component } from "react";
import axios from "axios";

class Update extends Component {
  state = {
    quantity: "",
  };
  constructor(props) {
    super(props);
    this.uhandleSubmit = this.uhandleSubmit.bind(this);
    this.dhandleSubmit = this.dhandleSubmit.bind(this);
    this.uhandle = this.uhandle.bind(this);
  }
  uhandle = event => {
    this.setState({ quantity: event.target.value });
  };
  uhandleSubmit = event => {
    console.log(this.props.p_id);
    const id = this.props.p_id;

    axios.patch(`/adminProducts/${id}`, {
      quantity: this.state.quantity,
    });
  };
  dhandleSubmit = event => {
    console.log(this.props.p_id);
    const id = this.props.p_id;

    axios.delete(`/adminProducts/${id}`, (req, res) => {
      res.send("deleted");
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.uhandleSubmit}>
          <input
            type="text"
            placeholder="Quantity"
            onChange={this.uhandle}
          ></input>
          <button className="btn btn-warning padding" type="submit">
            Update
          </button>
        </form>
        <form onSubmit={this.dhandleSubmit}>
          <button className="btn btn-danger padding" type="submit">
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default Update;
