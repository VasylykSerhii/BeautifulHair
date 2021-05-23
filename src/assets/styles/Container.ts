import { device } from "assets/styles";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  max-width: 1280px;

  @media ${device.mobileL} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export default Container;
