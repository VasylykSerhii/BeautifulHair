import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Item, ItemsWrap } from "./styled-components";
import { menuItems } from "../menuItems";

function MenuDesk(): JSX.Element {
  const router = useRouter();
  const url = router && router.pathname;

  return (
    <ItemsWrap>
      {menuItems.map((el) => (
        <Link href={el.href} key={el.name} passHref>
          <Item active={el.href === url}>{el.name}</Item>
        </Link>
      ))}
    </ItemsWrap>
  );
}

export default MenuDesk;
