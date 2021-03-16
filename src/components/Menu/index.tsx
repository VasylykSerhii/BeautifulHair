import React from "react";
import NextLink from "next/link";
import { useSelector } from 'react-redux'

import { scrollDirection } from "constants/index";
import {
  MenuPosition, MenuWrap, TextLogo, LogoDesc, ItemsWrap, Item, Span
} from "./styled-components";

const Menu = (): JSX.Element => {
  const {offsetTop, scrollDir} = useSelector(state => state.hooks)
  const { SCROLL_DIRECTION_DOWN } = scrollDirection;

  const settingMenu = {
    ...(offsetTop >= 100 ? { bgDark: true } : null),
    ...(scrollDir === SCROLL_DIRECTION_DOWN ? { menuHide: true } : null)
  }

  return (
    <MenuPosition {...settingMenu} >
      <MenuWrap>
        <NextLink href="/">
          <a>
            <TextLogo>
              <Span>BH</Span>
              <LogoDesc>Beautiful Hair</LogoDesc>
            </TextLogo>
          </a>
        </NextLink>
        <ItemsWrap>
          <Item href="#" active>
            Головна
          </Item>
          <Item href="#">
            Про мене
          </Item>
          <Item href="#">
            Мої роботи
          </Item>
        </ItemsWrap>
      </MenuWrap>
    </MenuPosition >
  );
};

export default Menu;
