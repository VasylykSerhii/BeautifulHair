import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IHooksState } from "redux/hooks/reducers";
import { IStore } from "redux/store";
import CustomMobileLink from "../CustomMobileLink";
import { menuItems } from "../menuItems";

import {
  Humburger,
  WrapperMenu,
  Line,
  Nav,
  ContentWrapper,
} from "./styled-components";

const animationDelay = 0.25;
const animationStartOffset = 2;

function MobileMenu(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const { offsetTop } = useSelector<IStore, IHooksState>(
    (state) => state.hooks
  );
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
        <Nav>
          {menuItems.map((el, idx) => (
            <CustomMobileLink
              href={el.href}
              title={el.name}
              key={el.name}
              styleAnimation={idx % 2 ? "fadeRight" : "fadeLeft"}
              animatedLink={isOpen}
              style={{
                animationDelay: `${
                  (idx + animationStartOffset) * animationDelay
                }s`,
              }}
            />
          ))}
        </Nav>
      </ContentWrapper>
    </WrapperMenu>
  );
}

export default MobileMenu;
