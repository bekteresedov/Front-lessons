import React from "react";
import "./style.css";
const Product = (props) => {
  console.log(props.a);
  return (
    <>
      <div className="product">
        <h2>Name:Alma</h2>
        <p>Price: 20$</p>
        <button>add to card</button>
      </div>
    </>
  );
};

export default Product;
