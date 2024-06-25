import React from "react";
import PorductItem from "./product-item";
import "./style.css";
import data from "../../constants/data";
const ProductList = () => {
  return (
    <>
      <section className="product-section">
        <ul className="products">
          {data.map((element) => (
            <PorductItem key={element.id} {...element} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default ProductList;
