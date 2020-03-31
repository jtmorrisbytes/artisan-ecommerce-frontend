import React, { Component } from "react";
import Card from "./Card/Card";
import "./Products.scss";
import Axios from "axios";
import Listing from "./Listing/Listing";
import SearchFilter from "./SearchFilter/SearchFilter";
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
    limit: 30,
    enableActions: true
  };
  deleteItem = id => {
    console.log(id);
    this.setState({ enableActions: false });
    Axios.delete("/api/product/" + id)
      .then(res => {
        this.setState({ products: res.data.data, enableActions: true });
      })
      .catch(error => {
        console.error(error);
        this.setState({ enableActions: true });
      });
  };
  componentDidMount() {
    Axios.get("/api/products")
      .then(res => {
        console.log(res.data.data);
        if (res.data.data) {
          this.setState({ products: res.data.data });
        }
      })
      .catch(console.error);
  }
  render() {
    let displayProducts = [];
    let limit = 0;
    if (this.state.limit > this.state.products.length) {
      limit = this.state.products.length - 1;
    } else {
      limit = this.state.limit - 1;
    }
    // console.log("render products", this.state.products);
    for (let i = 0; i < limit; i++) {
      // displayProducts.push(this.state.products[i])
      let product = this.state.products[i] || {};
      displayProducts.push(
        <Card
          key={product.id}
          id={product.id}
          name={product.name || defaultProduct.name}
          description={product.description || defaultProduct.description}
          price={product.price || defaultProduct.price}
          enableActions={this.state.enableActions}
          deleteItem={this.deleteItem}
        />
      );
    }
    return (
      <main className="Products">
        <SearchFilter />
        <Listing products={displayProducts} />
      </main>
    );
  }
}
export default Products;
