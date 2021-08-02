import React from "react";

const ProductDetail = (props) => {
  return (
    <div
      style={{
        margin: "10px",
        border: "1px solid blue",
      }}
    >
      <p>Product ID: {props.currentProduct?.id}</p>
      <p>Product Name: {props.currentProduct?.name}</p>
      <p>Product Description: {props.currentProduct?.description}</p>
      <p>Product Price: {props.currentProduct?.price}</p>
      <p>Product Category: {props.currentProduct?.category}</p>
      <button onClick={props.backToList}>Homepage</button>
    </div>
  );
};

export default ProductDetail;
