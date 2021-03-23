import styled from "styled-components";

interface IProps {
  isOpen: boolean;
  bgDark?: boolean;
}

export const WrapperMenu = styled.div``;
export const Humburger = styled.div`
  width: 22px;
  height: 14px;
  position: relative;
  cursor: pointer;
  z-index: 3000;

  &.isOpen {
    background: red;
  }
`;

export const Line = styled.div<IProps>`
  height: 2px;
  width: 100%;
  border-radius: 1px;
  background-color: ${({ theme }) => theme.colors.desc};
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? "50%" : 0)};
  transition: 0.35s cubic-bezier(0.26, 0.1, 0.27, 1.55);

  &:nth-child(1) {
    top: ${({ isOpen }) => (isOpen ? "50%" : 0)};
    transform: translateX(${({ isOpen }) => (isOpen ? "-50%" : 0)})
      rotate(${({ isOpen }) => (isOpen ? "45deg" : 0)});
  }
  &:nth-child(2) {
    top: ${({ isOpen }) => (isOpen ? "50%" : "calc(50% - 1px)")};
    transform: translateX(${({ isOpen }) => (isOpen ? "-50%" : 0)})
      rotate(${({ isOpen }) => (isOpen ? "-45deg" : 0)});
  }
  &:nth-child(3) {
    top: ${({ isOpen }) => (isOpen ? "50%" : "calc(100% - 2px)")};
    transform: translateX(${({ isOpen }) => (isOpen ? "-50%" : 0)})
      rotate(${({ isOpen }) => (isOpen ? "-45deg" : 0)});
  }

  ${Humburger}:hover & {
    background-color: ${({ theme }) => theme.colors.main};
  }
`;
export const ContentWrapper = styled.div<IProps>`
  padding-top: 80px;
  background-color: ${(props) =>
    props.bgDark ? props.theme.colors.menuBg : props.theme.colors.bodyBg};
  position: fixed;
  bottom: 0;
  left: 0;
  height: calc(100vh);
  width: 100vw;
  transform-origin: 100% 0;
  transition: 0.5s;
  transform: scale(1);
  z-index: 2;
  clip-path: circle(${({ isOpen }) => (isOpen ? "140%" : 0)} at 96% 3%);
`;
