import React from "react";
import "./Search.css";
const Search = props => {
  return (
    <div className="Search">
      <input
        type="text"
        value="this does not work yet"
        placeholder="search for a product by name"
      />
      <button disabled>S</button>
    </div>
  );
};
export default Search;
