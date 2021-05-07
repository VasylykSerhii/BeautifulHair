import styled from "styled-components";
import { device } from "assets/styles";

interface IPropsWrap {
  colors: {
    from: string;
    to: string;
  };
  image: string;
}
export const Wrapper = styled.a<IPropsWrap>`
  position: relative;
  padding: 60px 80px;
  border-radius: 10px;
  overflow: hidden;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  cursor: pointer;

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
  }

  @media ${device.tablet} {
    padding: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h4`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 15px;
  font-weight: 600;
  line-height: 1.2;

  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
`;

export const IconWrap = styled.div`
  margin-bottom: 20px;
`;
