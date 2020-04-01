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
  P_ASC = "p_asc";
  P_DESC = "p_desc";
  N_ASC = "n_asc";
  N_DESC = "n_desc";
  state = {
    products: [],
    limit: 30,
    priceMin: null,
    priceMax: null,
    name: "",

    sp: this.P_ASC,
    sn: this.N_ASC,
    enableActions: true
  };
  updateHistory = ({ name, sp, sn, priceMin, priceMax, limit, ...rest }) => {
    console.log(this.props.history);
    this.props.history.replace(
      `${this.props.history.location.pathname}?name=${name}&limit=${limit ||
        this.state.limit}&sp=${sp || this.state.sp || this.P_ASC}`
    );
  };
  getSearchParams() {
    let params = new URLSearchParams(this.props.history.location.search);
    return {
      name: params.get("name"),
      limit: params.get("limit"),
      sp: params.get("sp"),
      sn: params.get("sn"),
      priceMax: params.get("priceMax"),
      priceMin: params.get("priceMin")
    };
  }
  getProducts = () => {
    let params = this.getSearchParams();
    Axios.get(`/api/products?name=${params.name}`)
      .then(res => {
        console.log(res.data.data);
        if (res.data.data) {
          this.setState({ products: res.data.data });
        }
      })
      .catch(console.error);
  };
  handleNameChange = e => {
    console.log(this.props);

    this.setState({ name: e.target.value });

    this.updateHistory({ name: e.target.value });
    console.log(e.charCode, e.key, String.fromCharCode(e.keyCode));
    // this.setState({ name: e.target.value });
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
    this.unregisterHistoryListener = this.props.history.listen(
      this.getProducts
    );
    let params = this.getSearchParams();
    this.setState({
      name: params.name || this.state.name,
      limit: params.limit || this.state.limit
    });
    this.getProducts();
  }
  componentWillUnmount() {
    if (this.unregisterHistoryListener) {
      this.unregisterHistoryListener();
    }
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
        <SearchFilter
          name={this.state.name}
          handleNameChange={this.handleNameChange}
        />
        <Listing products={displayProducts} />
      </main>
    );
  }
}
export default Products;
