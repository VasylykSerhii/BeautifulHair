import { device } from "assets/styles";
import styled from "styled-components";

interface IProps {
  menuHide?: boolean;
  bgDark?: boolean;
}

export const MenuPosition = styled.div<IProps>`
  position: fixed;
  top: ${(props) => (props.menuHide ? "-88px" : 0)};
  left: 0;
  width: 100%;
  z-index: 999;
  height: 88px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.bgDark ? props.theme.colors.menuBg : props.theme.colors.bodyBg};

  @media ${device.mobileL} {
    height: 60px;
  }
`;

export const MenuWrap = styled.div`
  width: 1200px;
  max-width: calc(100% - 60px);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobileL} {
    max-width: calc(100% - 30px);
  }
`;
export const LinkLogo = styled.a``;
export const TextLogo = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 52px;
  line-height: 1;
  color: ${(props) => props.theme.colors.main};
  position: relative;
  z-index: 3000;

  @media ${device.mobileL} {
    font-size: 42px;
  }
`;

export const LogoDesc = styled.span`
  font-size: 16px;
  max-width: 70px;
  display: inline-block;

  @media ${device.mobileL} {
    font-size: 14px;
  }
`;

export const Span = styled.span``;
