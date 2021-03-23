import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  Humburger,
  WrapperMenu,
  Line,
  ContentWrapper,
} from "./styled-components";

function MobileMenu(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const { offsetTop } = useSelector((state) => state.hooks);
  const settingMenu = {
    ...(offsetTop >= 100 ? { bgDark: true } : null),
  };

  return (
    <WrapperMenu>
      <Humburger onClick={() => setIsOpen(!isOpen)}>
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
      </Humburger>
      <ContentWrapper isOpen={isOpen} {...settingMenu}>
        <p>sdfasdf</p>
        <p>sdfasdf</p>
        <p>sdfasdf</p>
        <p>sdfasdf</p>
        <p>sdfasdf</p>
        <p>sdfasdf</p>
      </ContentWrapper>
    </WrapperMenu>
  );
}

export default MobileMenu;
