import React from "react";
import NextLink from "next/link";
import { useSelector } from "react-redux";

import { scrollDirection } from "constants/index";
import { useMediaQuery } from "hooks/useMediaQuery";
import { IStore } from "redux/store";
import { IHooksState } from "redux/hooks/reducers";
import { Container } from "@material-ui/core";
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
  const { offsetTop, isScrollDown } = useSelector<IStore, IHooksState>(
    (state) => state.hooks
  );

  const isMobile = useMediaQuery(600);

  const settingMenu = {
    ...(offsetTop >= 100 ? { bgDark: true } : null),
    ...(offsetTop >= 100 && isScrollDown
      ? { menuHide: true }
      : { menuHide: false }),
  };

  return (
    <MenuPosition {...settingMenu}>
      <Container>
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
      </Container>
    </MenuPosition>
  );
};

export default Menu;
