import { device } from "assets/styles";
import styled from "styled-components";

interface IProps {
  light?: boolean;
}

export const Wrap = styled.div<IProps>`
  padding: 120px 0;
  background-color: ${({ light, theme }) =>
    light ? theme.colors.bodyBgLight : "transparent"};

  @media ${device.laptop} {
    padding: 100px 0;
  }

  @media ${device.tablet} {
    padding: 80px 0;
  }

  @media ${device.mobileL} {
    padding: 50px 0;
  }
`;
