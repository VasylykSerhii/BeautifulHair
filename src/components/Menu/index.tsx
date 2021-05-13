import React from "react";
import NextLink from "next/link";
import { useSelector } from "react-redux";

import { scrollDirection } from "constants/index";
import { useMediaQuery } from "hooks/useMediaQuery";
import { IStore } from "redux/store";
import { IChatState } from "redux/hooks/reducers";
import MenuDesk from "./Desktop";
import MobileMenu from "./Mobile";
import {
  MenuPosition,
  MenuWrap,
  TextLogo,
  LogoDesc,
  Span,
  LinkLogo,
} from "./styled-components";

const Menu = (): JSX.Element => {
  const { offsetTop, scrollDir } = useSelector<IStore, IChatState>(
    (state) => state.hooks
  );
  const { SCROLL_DIRECTION_DOWN } = scrollDirection;
  const isMobile = useMediaQuery(600);

  const settingMenu = {
    ...(offsetTop >= 100 ? { bgDark: true } : null),
    ...(offsetTop >= 100 && scrollDir === SCROLL_DIRECTION_DOWN
      ? { menuHide: true }
      : { menuHide: false }),
  };

  return (
    <MenuPosition {...settingMenu}>
      <MenuWrap>
        <NextLink href="/" passHref>
          <LinkLogo>
            <TextLogo>
              <Span>BH</Span>
              <LogoDesc>Beautiful Hair</LogoDesc>
            </TextLogo>
          </LinkLogo>
        </NextLink>

        {isMobile ? <MobileMenu /> : <MenuDesk />}
      </MenuWrap>
    </MenuPosition>
  );
};

export default Menu;
