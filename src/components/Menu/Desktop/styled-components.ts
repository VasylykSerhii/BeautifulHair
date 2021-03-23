import styled from "styled-components";

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
