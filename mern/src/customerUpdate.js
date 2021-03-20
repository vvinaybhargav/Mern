import React, { Component } from "react";
import axios from "axios";

class CustomerUpdate extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    quantity: "",
  };

  handle = event => {
    this.setState({ quantity: event.target.value });
  };
  handleSubmit = async event => {
    const id = this.props.p_id;
    await axios
      .patch(`/adminProducts/${id}`, { quantity: -this.state.quantity })
      .then((err, res) => {
        console.log(res.data);
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="number"
            min="1"
            onChange={this.handle}
            placeholder="0"
          ></input>
          <br></br>
          <br></br>
          <button className="btn btn-primary padding">Add to Cart</button>
        </form>
      </div>
    );
  }
}

export default CustomerUpdate;
