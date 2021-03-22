import React, { Component } from "react";
import "./App.css";
class Cart extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    count: 1,
  };

  render() {
    const ffv = "ff";
    return (
      <div>
        <h6 className={this.props.p_qty < 1 ? "red" : "green"}>
          {this.props.p_qty < 1
            ? " Out Of Stock"
            : `${this.props.p_qty} In Stock`}
        </h6>
      </div>
    );
  }
}

export default Cart;
