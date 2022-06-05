import React from 'react';
import NextLink from 'next/link';
import { useSelector } from 'react-redux';
import { Logo } from 'assets/icons';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { IStore } from 'store/store';
import { IHooksState } from 'store/hooks/reducers.hooks';
import MenuDesk from './Desktop';
import MobileMenu from './Mobile';
import { MenuPosition, MenuWrap, LinkLogo } from './styled-components';
import { Containers } from 'assets/styles';

const { Container } = Containers;
const Menu = (): JSX.Element => {
  const { offsetTop, isScrollDown } = useSelector<IStore, IHooksState>((state) => state.hooks);

  const isMobile = useMediaQuery(600);

  const settingMenu = {
    ...(offsetTop >= 100 ? { bgDark: true } : null),
    ...(offsetTop >= 100 && isScrollDown ? { menuHide: true } : { menuHide: false }),
  };

  return (
    <MenuPosition {...settingMenu}>
      <Container>
        <MenuWrap>
          <NextLink href="/" passHref>
            <LinkLogo>
              <Logo />
            </LinkLogo>
          </NextLink>

          {isMobile ? <MobileMenu /> : <MenuDesk />}
        </MenuWrap>
      </Container>
    </MenuPosition>
  );
};

export default Menu;
