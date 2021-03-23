import React from "react";
import NextLink from "next/link";
import { useSelector } from "react-redux";

import { scrollDirection } from "constants/index";
import { useMediaQuery } from "hooks/useMediaQuery";
import MenuDesk from "./Desktop";
import MobileMenu from "./Mobile";
import {
  MenuPosition,
  MenuWrap,
  TextLogo,
  LogoDesc,
  Span,
} from "./styled-components";

const Menu = (): JSX.Element => {
  const { offsetTop, scrollDir } = useSelector((state) => state.hooks);
  const { SCROLL_DIRECTION_DOWN } = scrollDirection;
  const isMobile = useMediaQuery(600);

  const settingMenu = {
    ...(offsetTop >= 100 ? { bgDark: true } : null),
    ...(scrollDir === SCROLL_DIRECTION_DOWN ? { menuHide: true } : null),
  };

  return (
    <MenuPosition {...settingMenu}>
      <MenuWrap>
        <NextLink href="/">
          <a>
            <TextLogo>
              <Span>BH</Span>
              <LogoDesc>Beautiful Hair</LogoDesc>
            </TextLogo>
          </a>
        </NextLink>

        {isMobile ? <MobileMenu /> : <MenuDesk />}
      </MenuWrap>
    </MenuPosition>
  );
};

export default Menu;
