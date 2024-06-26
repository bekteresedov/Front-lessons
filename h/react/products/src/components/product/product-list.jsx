import React from "react";
import ProductItem from "./product-item";
import "./style.css";
import productData from "../../constants/product-data";

const ProductList = () => {
  return (
    <>
      <section>
        <ul className="product-list">
          {productData.map((product) => (
            <li>
              <ProductItem
                imgSrc={product.imgSrc}
                description={product.description}
                price={product.price}
                name={product.name}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ProductList;
