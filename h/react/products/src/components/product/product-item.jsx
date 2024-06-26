import React from "react";
import Button from "../button/button";
const ProductItem = (props) => {
  return (
    <>
      <div className="product-item">
        <img src={props.imgSrc} alt={props.name} />
        <h2>Name: {props.name}</h2>
        <h3>Price: {props.price}$</h3>
        <p>description: {props.description}</p>
        <Button />
      </div>
    </>
  );
};

export default ProductItem;
