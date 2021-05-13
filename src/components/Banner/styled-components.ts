import { device } from "assets/styles";
import styled from "styled-components";

export const BannerWrap = styled.div`
  background-color: ${(props) => props.theme.colors.bodyBg};
  overflow: hidden;
  position: relative;
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  min-height: calc(100vh - 88px);
  margin: auto;
  width: 100%;

  @media ${device.mobileL} {
    min-height: calc(100vh - 60px);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
`;

export const Title = styled.h1`
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
`;

export const Description = styled.h5`
  font-weight: 400;
  max-width: 400px;
  color: ${(props) => props.theme.colors.title};
  margin-top: 10px;

  @media ${device.laptop} {
    font-size: 30px;
  }

  @media ${device.tablet} {
    font-size: 26px;
    line-height: 30px;
  }

  @media ${device.mobileL} {
    font-size: 24px;
  }
`;

export const ButtonWrap = styled.div`
  margin-top: 50px;
`;

export const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 80%;
  z-index: 0;

  @media ${device.tablet} {
    right: -10%;
    height: auto;
    width: 125%;
  }
`;
