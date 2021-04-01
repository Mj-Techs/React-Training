import React, { PropsWithChildren, useContext, useState } from "react";
import styled from "styled-components";
import { sellerContext } from "../../App";
import { ISeller } from "../../data/ProductInfo";
import { Simple } from "../simple";
import { UserInfo } from "../userInfo";

const ProductContainer = styled.div`
  width: 200px;
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 5px 5px 5px darkblue;
  float: left;
  margin: 5px;
`;

interface Props {
  id: number;
  title: string;
  price: number;
  addtocart?: (product: any) => void;
  updateTitle?: (data: { title: string; id: number }) => void;
}

export const Product: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(props.title);
  const sellerInfo: ISeller = useContext(sellerContext);
  const handleCart = () => {
    props.addtocart &&
      props.addtocart({
        title: props.title,
        price: props.price,
        quantity,
      });
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = Number(event.target.value);
    setQuantity(result);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const updateTitle = () => {
    setIsEdit(false);
    props.updateTitle && props.updateTitle({ title, id: props.id });
  };
  return (
    <ProductContainer>
      {!isEdit && <h3 onClick={() => setIsEdit(true)}>Name: {title}</h3>}
      {isEdit && (
        <div>
          <input type="text" value={title} onChange={handleTitleChange} />
          <button type="button" onClick={() => updateTitle()}>
            Update
          </button>
        </div>
      )}

      <h6>price:{props.price}</h6>
      <h5>{props.children}</h5>
      <h4>seller Name : {sellerInfo.name}</h4>
      <h4>seller Rating: {sellerInfo.rating}</h4>

      <div>
        <input
          type="number"
          min="1"
          max="5"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <button type="button" onClick={() => handleCart()}>
        Add to cart
      </button>
    </ProductContainer>
  );
};
