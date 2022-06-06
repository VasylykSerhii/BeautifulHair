import { device } from 'assets/styles';
import styled from 'styled-components';

interface IMainProps {
  notOffsetTop: boolean;
}

export const Main = styled.main<IMainProps>`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  margin-top: ${(props) => (props.notOffsetTop ? 0 : '88px')};

  @media ${device.mobileL} {
    margin-top: ${(props) => (props.notOffsetTop ? 0 : '60px')};
  }
`;
export const LoginMain = styled.main<IMainProps>`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const RightSide = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  height: 100vh;

  @media ${device.mobileL} {
    padding: 16px;
  }
`;
