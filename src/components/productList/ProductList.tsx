import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productInfo } from "../../data/ProductInfo";
import { Product } from "../Product";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description?: string;
}

interface Props {
  list?: Array<IProduct>;
  addtocart?: (product: any) => void;
  updateTitle?: (data: { title: string; id: number }) => void;
}

export const ProductList: React.FC<Props> = (props: Props) => {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productInfo);
      setLoading(false);
    }, 3000);
  });
  return (
    <div>
      {loading && <div>Loading...</div>}
      {products?.map((product, index) => (
        <div key={`${product.title}_${index}`}>
          <Link to={`/product/${product.id}`}>
            {" "}
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
              addtocart={props.addtocart}
              updateTitle={props.updateTitle}
            >
              {product.description}
            </Product>
          </Link>
        </div>
      ))}
    </div>
  );
};
