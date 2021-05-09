import React from "react";

import { ItemsWrap } from "./styled-components";
import { menuItems } from "../menuItems";
import CustomLink from "../CustomLink";

function MenuDesk(): JSX.Element {
  return (
    <ItemsWrap>
      {menuItems.map((el) => (
        <CustomLink href={el.href} title={el.name} key={el.name} />
      ))}
    </ItemsWrap>
  );
}

export default MenuDesk;
