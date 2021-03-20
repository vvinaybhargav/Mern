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
  uhandleSubmit = async event => {
    const id = this.props.p_id;
    try {
      const res = await axios.patch(`/adminProducts/${id}`, {
        quantity: this.state.quantity,
      });
      console.log(this.state.quantity);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
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
      <div className="row-sm-2">
        <form onSubmit={this.uhandleSubmit}>
          <input
            className="input"
            type="number"
            placeholder="0"
            onChange={this.uhandle}
          ></input>
          <button className="col btn btn-warning padding" type="submit">
            Update
          </button>
        </form>
        <form onSubmit={this.dhandleSubmit}>
          <button className="col btn btn-danger padding" type="submit">
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default Update;
