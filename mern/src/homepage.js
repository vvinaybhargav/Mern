import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Update from "./update";
import Cart from "./cart";
import Products from "./products";

class HomePage extends Component {
  state = {
    products: [],
    title: "",
    price: "",
    desc: "",
    quantity: 1,
    dtitle: "",
    p_id: "",
  };

  componentDidMount() {
    axios.get("/adminProducts").then(res => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Products />

        <div className="row pad">
          {this.state.products.map(product => (
            <div class="card mb-3 h-100 width" key={product._id}>
              <div class="row g-5">
                <div class="col-sm-4 col-lg-4">
                  <img
                    src="https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-bekv6ev394c96hh1nok5hp4ra5-20190903132341.jpeg"
                    alt="image"
                    className="img-fluid img"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h4 class="card-title">{product.title}</h4>
                    <h5 class="card-text color">₹ {product.price}</h5>
                    <h6 class="card-text color1">
                      {product.quantity} In Stock <Update p_id={product._id} />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
