import styled, { css } from "styled-components";

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
    props.bgDark ? props.theme.colors.menuBg : "transparent"};
`;

export const MenuWrap = styled.div`
  width: 1200px;
  max-width: calc(100% - 60px);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextLogo = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 52px;
  line-height: 1;
  color: ${(props) => props.theme.colors.main};
`;

export const LogoDesc = styled.span`
  font-size: 16px;
  max-width: 70px;
  display: inline-block;
`;

export const Span = styled.span``;

export const ItemsWrap = styled.nav`
  display: flex;
`;

export const Item = styled.a<{ active?: boolean }>`
  font-size: 14px;
  position: relative;
  color: ${(props) =>
    props.active ? props.theme.colors.main : props.theme.colors.white};
  text-decoration: none;

  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: calc(100% + 5px);
    height: 2px;
    width: ${(props) => (props.active ? "50%" : 0)};
    background-color: $main;
    transition: $trns;
  }

  &:not(:last-of-type) {
    margin-right: 30px;
  }
`;
