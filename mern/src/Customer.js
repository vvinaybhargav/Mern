import axios from "axios";
import React, { Component } from "react";
import apple from "./apple.jpeg";
import CustomerUpdate from "./customerUpdate";
import HomePage from "./homepage";
import Update from "./update";

class Customer extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios.get("/adminProducts").then(res => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div class="row">
            {this.state.products.map(product => (
              <div key={product._id} class="column">
                <div class="card">
                  <img src={apple} alt="image" className="img" />
                  <div className="card-title">
                    <h4>{product.title}</h4>
                  </div>
                  <h5 className="color">₹ {product.price}</h5>
                  <h6 className="color1">{product.quantity} in stock</h6>
                  <h6 className="card-text">
                    <CustomerUpdate p_id={product._id} />
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

export default Customer;
