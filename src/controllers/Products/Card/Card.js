import React from "react";
import "./Card.css";
const Card = props => {
  return (
    <div className="Product Card">
      <img src="http://picsum.photos/200/200" alt="example image" />
      <span className="name">PRODUCT NAME</span>
      <span className="price">$999.99</span>
      <p className="description">
        This is an example description that should be termniated with a trailing
        elipsis
      </p>
      <a className="moreDescription">see more</a>
      <button className="add-or-edit">Add To Cart</button>
    </div>
  );
};
export default Card;
