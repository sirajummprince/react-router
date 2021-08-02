import React from "react";

const ProductList = (props) => {
  return <div>
      {props.products.map((data) => {
        return (
          <div
            style={{
              margin: "10px",
              border: "1px solid blue",
            }}
            //onClick={()=>props.selectProducts({data})}
          >
            <p>Product ID: {data.id}</p>
            <p>Product Name: {data.name}</p>
            <p>Product Description: {data.description}</p>
            <p>Product Price: {data.price}</p>
            <p>Product Category: {data.category}</p>
          </div>
        );
      })}
  </div>;
};

export default ProductList;
