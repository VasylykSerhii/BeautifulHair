import { device } from "assets/styles";
import styled from "styled-components";

export const AboutWrap = styled.div`
  padding: 120px 0;
  position: relative;

  @media ${device.laptop} {
    padding: 100px 0;
  }

  @media ${device.tablet} {
    padding: 80px 0;
  }

  @media ${device.mobileL} {
    padding: 50px 0;
  }

  &::before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.bodyBgLight};
    width: 150vw;
    height: 100%;
    left: -50vw;
    top: 0;
    z-index: -1;
  }
`;

export const AboutContent = styled.div`
  width: 100%;
  margin: auto;
  display: flex;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const TitleWrap = styled.div`
  width: 41%;
  position: relative;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 45px;
  text-transform: capitalize;
  font-weight: 700;
  padding-bottom: 20px;
  margin-top: 0;
  position: absolute;
  top: 45%;
  left: 30%;
  color: ${({ theme }) => theme.colors.desc};

  &:before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100px;
    height: 4px;
    background: ${({ theme }) => theme.colors.main};
    transition: all 0.3s;
  }

  @media ${device.tablet} {
    position: relative;
    left: 0;
    text-align: center;
    margin: 100px 0 140px;

    &:before {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media ${device.mobileL} {
    font-size: 30px;
  }
`;

export const DescWrap = styled.div`
  width: 59%;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Desc = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 30px;
  padding-right: 90px;
  color: ${({ theme }) => theme.colors.desc};

  @media ${device.tablet} {
    padding-right: 0;
  }
`;
