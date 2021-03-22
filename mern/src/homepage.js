import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Update from "./update";
import Cart from "./cart";
import Products from "./products";
import apple from "./apple.jpeg";

class HomePage extends Component {
  state = {
    products: [],
    title: "",
    price: "",
    desc: "",
    quantity: 1,
    values: " ",
  };

  componentDidMount() {
    axios.get("/adminProducts").then(res => {
      this.setState({ products: res.data });
    });
  }

  quantity = () => {
    var q = document.getElementById("qty").value;
    console.log(this.state.values, "clicked");
  };
  qh = event => {
    event.preventDefault();
    console.log(this.state.values);
  };
  stock = () => {
    const i = document.getElementById("qty").value;
    console.log(i);
    if (i > 1) {
      console.log("outofstock");
    }
  };

  render() {
    var color = this.stock;

    return (
      <div>
        <h1>Admin Home Page</h1>
        <Products />

        <div className="container-fluid">
          <div className="row">
            {this.state.products.map(product => (
              <div key={product._id} className="column">
                <div className="card">
                  <img src={product.image} alt="image" className="img" />
                  <div className="card-title">
                    <h4>{product.title}</h4>
                  </div>
                  <h5 className="color">₹ {product.price}</h5>

                  <Cart p_qty={product.quantity} />
                  <h6 className="card-text">
                    <Update p_id={product._id} />
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
