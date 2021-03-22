import React, { Component } from "react";
import axios from "axios";

class CustomerUpdate extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    quantity: { type: Number, minimum: 3 },
    count: 0,
  };

  handle = event => {
    this.setState({ quantity: this.state.count });
  };
  handleSubmit = async event => {
    const id = this.props.p_id;
    await axios
      .patch(`/adminProducts/${id}`, { quantity: -this.state.count })
      .then((err, res) => {
        console.log(res.data);
        console.log(err);
      });
  };
  inc = event => {
    event.preventDefault();
    if (this.props.p_qty > this.state.count) {
      this.setState({ count: this.state.count + 1 });
    } else {
      alert("max stock reached");
    }
  };
  dec = event => {
    event.preventDefault();
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="badge">
            <button className="btn btn-primary padding" onClick={this.dec}>
              -
            </button>

            {this.state.count}

            <button className="btn btn-primary padding" onClick={this.inc}>
              +
            </button>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
        </form>
      </div>
    );
  }
}

export default CustomerUpdate;
