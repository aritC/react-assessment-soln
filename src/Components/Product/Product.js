import React from "react";

import "./Product.css";

const Product = (props) => {
  const { productName, productPrice } = props;

  return (
    <div className="product">
      <h2>{productName}</h2>
      <p>Price: ${productPrice}</p>
    </div>
  );
};

export default Product;
