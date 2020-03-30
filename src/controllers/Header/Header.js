import React from "react";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
const Header = props => {
  return (
    <header className="Header">
      <Navigation />
      <Search />
    </header>
  );
};
export default Header;
