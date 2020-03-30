import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
const Navigation = props => {
  return (
    <nav id="Navigation">
      navigation works
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/cart">CART</Link>
      </div>
    </nav>
  );
};

export default Navigation;
