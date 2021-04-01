import { device } from "assets/styles";
import styled from "styled-components";

export const Main = styled.main`
  padding-top: 88px;
  width: calc(100% - 60px);
  max-width: 1200px;
  margin: auto;

  @media ${device.mobileL} {
    padding-top: 60px;
    width: calc(100% - 30px);
  }
`;
