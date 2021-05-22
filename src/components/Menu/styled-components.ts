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
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkLogo = styled.a``;
