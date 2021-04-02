import { device } from "assets/styles";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 88px;
  width: calc(100vw - 60px);
  max-width: 1200px;
  margin: auto;

  @media ${device.mobileL} {
    padding-top: 60px;
    width: calc(100% - 30px);
  }
`;

export const Main = styled.div`
  width: 100vw;
  overflow: hidden;
`;
