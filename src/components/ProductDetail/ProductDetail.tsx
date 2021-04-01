import React, { useState, useEffect } from "react";
import { productInfo } from "../../data/ProductInfo";

export const ProductDetail = (props) => {
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    //get the product id from the path parameter
    const { id } = props.match.params;
    if (id) {
      const productinfo = productInfo.find((p) => p.id == id);

      if (productinfo) {
        setProduct(productinfo);
      }
    }
  }, []);
  return (
    <div>
      <h1>Product Name : {product.title}</h1>
      <h4>Product Price : {product.price} </h4>
    </div>
  );
};
