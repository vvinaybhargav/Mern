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
    if (this.state.count === 0) {
      event.preventDefault();
    } else {
      const id = this.props.p_id;
      await axios
        .patch(`/adminProducts/${id}`, { quantity: -this.state.count })
        .then((err, res) => {
          console.log(res.data);
          console.log(err);
        });
    }
  };
  inc = event => {
    event.preventDefault();
    if (this.props.p_qty > this.state.count) {
      this.setState({ count: this.state.count + 1 });
    } else if (this.props.p_qty === 0) {
    } else {
      alert("Max Stock Reached");
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
          <div></div>
          <button
            className={
              this.state.count <= 0
                ? "btn btn-secondary disable"
                : "btn btn-primary"
            }
            onClick={this.dec}
          >
            -
          </button>
          <div className="badge pad">{this.state.count}</div>
          <button
            className={
              this.props.p_qty <= this.state.count
                ? "btn btn-secondary dsiable"
                : "btn btn-primary"
            }
            onClick={this.inc}
          >
            +
          </button>
          <div>
            <button
              type="submit"
              className={
                this.props.p_qty !== 0
                  ? "btn btn-primary padding"
                  : "btn btn-secondary padding disable"
              }
            >
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CustomerUpdate;
