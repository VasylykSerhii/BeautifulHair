import { device } from "assets/styles";
import styled from "styled-components";

interface IMainProps {
  notOffsetTop: boolean;
}

export const Main = styled.main<IMainProps>`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  margin-top: ${(props) => (props.notOffsetTop ? 0 : "88px")};

  @media ${device.mobileL} {
    margin-top: ${(props) => (props.notOffsetTop ? 0 : "60px")};
  }
`;
