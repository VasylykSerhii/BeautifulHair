import React from 'react';

import { ItemsWrap } from './styled-components';
import { menuItems } from '../menuItems';
import CustomLink from '../CustomLink';
import { Buttons } from 'assets/styles';
import Link from 'next/link';
import { routers } from 'constants/index';

const { ButtonSmall } = Buttons;

function MenuDesk(): JSX.Element {
  return (
    <ItemsWrap>
      {menuItems.map((el) => (
        <CustomLink href={el.href} title={el.name} key={el.name} />
      ))}
      <Link href={routers.LOGIN} passHref>
        <ButtonSmall as="a">Ввійти</ButtonSmall>
      </Link>
    </ItemsWrap>
  );
}

export default MenuDesk;
