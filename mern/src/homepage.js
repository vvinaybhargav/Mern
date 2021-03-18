import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Update from "./update";

class HomePage extends Component {
  state = {
    products: [],
    title: "",
    price: "",
    desc: "",
    quantity: "",
    dtitle: "",
    p_id: "",
  };

  componentDidMount() {
    axios.get("/getProducts").then(res => {
      this.setState({ products: res.data });
    });
  }
  handle = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    axios
      .post("/addProducts", {
        title: this.state.title,
        price: this.state.price,
        description: this.state.desc,
        quantity: this.state.quantity,
      })
      .then(res => {
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handle}
          ></input>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            onChange={this.handle}
          ></input>
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={this.handle}
          ></input>
          <input
            type="text"
            name="desc"
            maxLength="32"
            placeholder="Description"
            onChange={this.handle}
          ></input>

          <button type="submit">Submit</button>
        </form>

        <div className="row">
          {this.state.products.map(product => (
            <div className="col-sm-3" key={product._id}>
              <div className="card size">
                <img
                  className="card-img-top"
                  src="https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg"
                  alt="apple"
                ></img>
                <div className="card-block">
                  <div className="card-title">
                    <h3>{product.title}</h3>
                  </div>
                  <div className="card-text"> ${product.price}</div>
                  <div className="card-text">{product.description}</div>
                  <div className="card-text">
                    <Update
                      p_id={product._id}
                      title={product.title}
                      price={product.description}
                    />
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
