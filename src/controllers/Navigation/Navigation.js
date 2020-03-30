import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
const Navigation = props => {
  return (
    <nav id="Navigation">
      navigation works
      <div className="nav-links">
        <Link to="/home">HOME</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to="/cart">CART</Link>
      </div>
    </nav>
  );
};

export default Navigation;
