import { device } from "assets/styles";
import styled from "styled-components";

interface IPropsWrap {
  colors: {
    from: string;
    to: string;
  };
  image: string;
}

export const Wrapper = styled.div<IPropsWrap>`
  background-image: url(${({ image }) => image});
  position: relative;
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-position: center;
  padding: 60px;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.8;
    z-index: 0;
    background-image: linear-gradient(
      48deg,
      ${({ colors }) => colors.from} 0,
      ${({ colors }) => colors.to} 100%
    );
    filter: brightness(0.5);
  }
`;
export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: auto;
  text-align: center;
`;
export const Title = styled.h1`
  font-size: 60px;
  line-height: 83px;
  color: ${({ theme }) => theme.colors.main};
  margin-bottom: 30px;

  @media ${device.desktop} {
    font-size: 55px;
    line-height: 76px;
  }

  @media ${device.laptop} {
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    font-size: 50px;
    line-height: 69px;
  }

  @media ${device.mobileL} {
    font-size: 28px;
    line-height: 39px;
    margin-bottom: 15px;
  }
`;
export const Desc = styled.p`
  font-size: 30px;
  line-height: 50px;
  width: 1320px;
  margin: 0 auto;
  max-width: calc(100% - 60px);
  color: ${({ theme }) => theme.colors.white};

  @media ${device.desktop} {
    font-size: 25px;
    line-height: 38px;
    width: 943px;
  }

  @media ${device.laptop} {
    font-size: 30px;
    line-height: 50px;
    width: 880px;
  }

  @media ${device.tablet} {
    line-height: 45px;
    width: 100%;
  }

  @media ${device.mobileL} {
    line-height: 45px;
    width: 100%;
    max-width: calc(100% - 30px);
    font-size: 20px;
    line-height: 30px;
  }
`;
