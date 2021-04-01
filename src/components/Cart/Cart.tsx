import React from "react";
import styled from "styled-components";
interface Props {
  list: Array<any>;
}
const CartWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 150px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #eee;
  background-color: cyan;
`;
export const Cart: React.FC<Props> = ({ list }: Props) => {
  return (
    <CartWrapper>
      {list.length} prodcuts
      <div>Title - Price - Qunat</div>
      <div>
        {list?.map(({ title, price, quantity }, index) => (
          <div key={index}>
            {title}-{price} - {quantity}
          </div>
        ))}
      </div>
    </CartWrapper>
  );
};
