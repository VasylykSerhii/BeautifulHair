import React from "react";
import { Item, ItemsWrap } from "./styled-components";

function MenuDesk(): JSX.Element {
  return (
    <ItemsWrap>
      <Item href="#" active>
        Головна
      </Item>
      <Item href="#">Про мене</Item>
      <Item href="#">Мої роботи</Item>
    </ItemsWrap>
  );
}

export default MenuDesk;
