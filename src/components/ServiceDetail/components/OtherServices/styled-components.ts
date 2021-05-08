import { device } from "assets/styles";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 80px;

  @media ${device.tablet} {
    margin-top: 70px;
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    margin-top: 40px;
  }
`;
