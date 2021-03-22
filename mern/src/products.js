import React, { Component } from "react";
import axios from "axios";
import "./App.css";
class Products extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    products: [],
    title: "",
    price: "",
    desc: "",
    quantity: "",
    dtitle: "",
    p_id: "",
  };
  handle = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    axios
      .post("/adminProducts", {
        title: this.state.title,
        price: this.state.price,
      })
      .then(res => {
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <select name="title" onChange={this.handle}>
              <option value="">Select</option>
              <option value="Apple">Apple</option>

              <option className="Simage" value="Grape">
                Grape
              </option>
              <option value="Orange">Orange</option>

              <option value="Banana">Banana</option>
              <option value="Mango">Mango</option>
              <option value="Papaya">Papaya</option>

              <option value="Pine Apple">Pine Apple</option>
            </select>

            {/* <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            min="1"
            onChange={this.handle}
          ></input> */}
            <input
              type="number"
              name="price"
              min="1"
              placeholder="Price"
              onChange={this.handle}
            ></input>
            {/* <input
            type="text"
            name="desc"
            maxLength="32"
            placeholder="Description"
            onChange={this.handle}
          ></input> */}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Products;
