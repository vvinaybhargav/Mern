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
  };

  componentDidMount() {
    axios.get("/adminProducts").then(res => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <div>
        <h1>Admin Home Page</h1>
        <Products />

        <div className="container-fluid">
          <div class="row">
            {this.state.products.map(product => (
              <div class="column">
                <div class="card">
                  <img src={apple} alt="image" className="img" />
                  <div className="card-title">
                    <h4>{product.title}</h4>
                  </div>
                  <h5 className="color">₹ {product.price}</h5>
                  <h6 className="color1">{product.quantity}</h6>
                  <h7 className="card-text">
                    <Update p_id={product._id} />
                  </h7>
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
