import { device } from "assets/styles";
import styled from "styled-components";

export const WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;

  @media ${device.tablet} {
    margin-top: 70px;
  }

  @media ${device.mobileL} {
    margin-top: 40px;
  }
`;
