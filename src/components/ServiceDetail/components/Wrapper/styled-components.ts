import { device } from "assets/styles";
import styled from "styled-components";

export const Wrap = styled.div`
  padding: 120px 0;

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
