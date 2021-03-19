import React, { Component } from "react";
class Cart extends Component {
  state = {};
  incr = () => {
    var value = parseInt(document.getElementById("number").value);
    value++;
  };
  render() {
    return (
      <div>
        <p id="number" value={2}></p>
        <button onClick={this.incr}>+</button>
      </div>
    );
  }
}

export default Cart;
