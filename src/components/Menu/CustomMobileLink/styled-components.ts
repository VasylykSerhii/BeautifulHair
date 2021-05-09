import styled, { css, keyframes } from "styled-components";

const fadeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1,
    transform: translateX(0);
  }
`;
const fadeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1,
    transform: translateX(0);
  }
`;

const animationStyles = {
  fadeLeft,
  fadeRight,
};

interface IItemProps {
  active?: boolean;
  animatedLink?: boolean;
  styleAnimation: string;
}

export const Item = styled.a<IItemProps>`
  font-size: 18px;
  position: relative;
  color: ${(props) =>
    props.active ? props.theme.colors.main : props.theme.colors.white};
  text-decoration: none;
  padding: 30px;
  transition: all 0.2s ease;

  ${({ animatedLink, styleAnimation }) =>
    animatedLink &&
    css`
      animation-fill-mode: both;
      animation-duration: 0.25s;
      animation-name: ${animationStyles[styleAnimation]};
    `}
`;
