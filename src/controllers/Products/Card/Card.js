import React from "react";
import "./Card.css";
const Card = props => {
  return (
    <div className="Product Card">
      <img src="http://picsum.photos/200/200" alt="example image" />
      <span className="name">{props.name}</span>
      <span className="price">{props.price}</span>
      <p className="description">{props.description}</p>
      <a className="moreDescription">see more</a>
      <button className="add-or-edit">Add To Cart</button>
    </div>
  );
};
export default Card;
