import React, { Component } from "react";
import axios from "axios";

class HomePage extends Component {
  state = { products: [], title: "", price: "", desc: "" };

  componentDidMount() {
    axios.get("/getProducts").then(res => {
      this.setState({ products: res.data });
    });
  }
  handle = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    // event.preventDefault();
    axios
      .post("addProducts", {
        title: this.state.title,
        price: this.state.price,
        description: this.state.desc,
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
            name="price"
            placeholder="Price"
            onChange={this.handle}
          ></input>
          <input
            type="text"
            name="desc"
            placeholder="Description"
            onChange={this.handle}
          ></input>
          <button type="submit">Submit</button>
        </form>

        <ul>
          {this.state.products.map(product => (
            <li key={product._id}>{product.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
