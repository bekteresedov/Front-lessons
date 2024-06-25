import React from "react";
import Button from "../button/button";

const PorductItem = ({ name, price, title, imgSrc }) => {
  return (
    <>
      <div className="product-item">
        <img src={imgSrc} alt={name} />
        <h2>Product Name: {name}</h2>
        <h3>Product Price: {price}</h3>
        <p>title: {title}</p>

        <Button />
      </div>
    </>
  );
};

export default PorductItem;
