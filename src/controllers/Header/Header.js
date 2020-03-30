import React from "react";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
const Header = props => {
  return (
    <header className="Header">
      <img className="brand-img" alt="brand image" />
      <Navigation />
      <Search />
    </header>
  );
};
export default Header;
