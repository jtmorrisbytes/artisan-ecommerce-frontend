import React, { Component } from "react";
import Card from "./Card/Card";
import Axios from "axios";
const defaultProduct = {
  name: "PRODUCT NAME",
  description:
    "this is a default description. something went wrong. please refresh the page and try again",
  tags: "",
  price: 999.99
};
class Products extends Component {
  state = {
    products: [],
    limit: 30
  };
  componentDidMount() {
    Axios.get("/api/products")
      .then(res => {
        console.log(res.data);
        this.setState({ products: res.data });
      })
      .catch(console.error);
  }
  render() {
    let displayProducts = [];
    for (let i = 0; i <= this.state.limit; i++) {
      // displayProducts.push(this.state.products[i])
      let product = [this.state.products[i]];
      displayProducts.push(
        <Card
          key={i}
          name={product.name || defaultProduct.name}
          description={product.description || defaultProduct.description}
          price={product.price || defaultProduct.price}
        />
      );
    }
    return (
      <div className="Products">
        <div className="search Box">
          {/* this component is being stubbed */}
        </div>
        <div className="Products Listing">{displayProducts}</div>
      </div>
    );
  }
}
export default Products;
