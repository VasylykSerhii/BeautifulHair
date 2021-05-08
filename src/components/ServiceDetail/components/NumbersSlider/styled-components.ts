import styled, { css } from "styled-components";
import { device } from "assets/styles";

export const Title = styled.div`
  margin: 0 auto;
  transform: translateY(100px);
  transition: all 0.5s ease;
  z-index: 9;
  font-weight: 600;
  position: relative;
  font-size: 22px;
  max-width: 195px;
  color: ${({ theme }) => theme.colors.title};

  @media ${device.desktop} {
    max-width: 190px;
    font-size: 18px;
    padding-bottom: 60px;
  }

  @media ${device.laptop} {
    padding-bottom: 55px;
  }

  @media ${device.tablet} {
    padding-bottom: 45px;
  }

  @media ${device.mobileL} {
    transform: translateY(0);
    padding-bottom: 0;
    padding: 3px 0 20px 0;
    margin: 0;
    max-width: unset;
    text-align: start;
    margin-left: 65px;
  }
`;

export const Desc = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.5s ease;
  transform: translateY(-20px);
  width: 100%;
  min-height: 202px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.desc};
  font-size: 20px;
  line-height: 35px;
  padding: 30px 25px;
  max-width: 285px;
  max-height: 240px;
  transform: translate(-50%, 140%);
  left: 50%;

  @media ${device.desktop} {
    font-size: 17px;
    line-height: 26px;
    padding: 15px 10px;
    max-height: 185px;
    min-height: 162px;
    transform: translate(-50%, 130%);
  }

  @media ${device.laptop} {
    padding: 15px;
    transform: translate(-50%, 110%);
    max-width: 300px;
    max-height: 160px;
    min-height: 136px;
    min-width: 269px;
  }

  @media ${device.tablet} {
    padding: 15px 10px;
    line-height: 25px;
    min-width: 200px;
    min-height: 157px;
    max-width: 210px;
  }

  @media ${device.mobileL} {
    padding: 0 0 0 15px;
    transform: translate(0, 0);
    opacity: 1;
    min-height: initial;
    min-width: initial;
    position: initial;
    border: none;
    max-height: initial;
    max-width: initial;
    text-align: initial;
    transform: translate(0, 0) !important;
  }
`;

export const Num = styled.div`
  position: absolute;
  z-index: -1;
  color: #e8e8e8;
  font-weight: 700;
  font-size: 120px;
  top: 44%;
  left: 45%;
  transform: translate(-45%, -46%);

  @media ${device.desktop} {
    font-size: 80px;
    top: 45%;
    left: 44%;
    transform: translate(-44%, -45%);
  }

  @media ${device.laptop} {
    top: 44%;
    left: 46%;
    transform: translate(-45%, -45%);
  }

  @media ${device.mobileL} {
    font-size: 40px;
    top: 7px;
    left: 0;
    transform: translate(5px, -15px);
  }
`;

export const Slider = styled.div`
  user-select: none;
  position: relative;
  margin: 0 auto;
  max-width: 1680px;
  padding-bottom: 170px;
  padding-top: 170px;

  @media ${device.desktop} {
    margin: 0 auto;
    max-width: 1280px;
    padding-bottom: 130px;
    padding-top: 130px;
  }

  @media ${device.laptop} {
    max-width: 945px;
  }

  @media ${device.tablet} {
    padding-bottom: 130px;
  }

  @media ${device.mobileL} {
    margin: 40px auto 0 auto;
    padding-left: 11px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const SliderLine = styled.div`
  position: absolute;
  top: calc(50% - 1px);
  left: 8%;
  width: 84%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.main};
  z-index: 1;
  transform: scaleX(0);
  transform-origin: left;
  transition: all 0.5s ease;

  @media ${device.laptop} {
    top: 30.2%;
    left: 17%;
  }

  @media ${device.tablet} {
    top: 29.5%;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

export const SliderLineLaptop = styled(SliderLine)`
  display: none;

  @media ${device.laptop} {
    display: block;
    top: 71.1%;
    left: 17%;
  }

  @media ${device.tablet} {
    top: 71.7%;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

interface IItem {
  active?: boolean;
}

export const Item = styled.div<IItem>`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  flex-grow: 0;
  max-width: 16.666667%;
  flex-basis: 16.666667%;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translate(0, -50%);
    height: 1px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  &:after {
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    position: absolute;
    width: 21px;
    height: 21px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.main};
    border-radius: 50%;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  &:first-child::before {
    transform: translate(100%, -50%);
  }

  &:first-child,
  &:last-child {
    &::before {
      width: 50%;
    }
  }

  ${(props) =>
    props.active &&
    css`
      ${Title} {
        transform: translateY(-100px);

        @media ${device.desktop} {
          transform: translateY(-30px);
        }

        @media ${device.laptop} {
          transform: translateY(-40px);
        }

        @media ${device.mobileL} {
          transform: translateY(0);
        }
      }

      ${Desc} {
        opacity: 1;
        transform: translate(-50%, 130%);

        @media ${device.desktop} {
          transform: translate(-50%, 100%);
        }
      }

      &:after {
        background-color: ${({ theme }) => theme.colors.main};
      }
    `}

  @media ${device.laptop} {
    flex-grow: 0;
    max-width: 33.333333%;
    flex-basis: 33.333333%;

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      margin-bottom: 155px;
    }

    &:nth-child(4)::before {
      transform: translate(100%, -50%);
    }

    &:nth-child(4),
    &:nth-child(3) {
      &::before {
        width: 50%;
      }
    }
  }

  @media ${device.tablet} {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      margin-bottom: 170px;
    }
  }

  @media ${device.mobileL} {
    margin-bottom: 0 !important;
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;

    &:not(:last-child) {
      border-left: 1px solid ${({ theme }) => theme.colors.border};

      ${Desc} {
        margin-bottom: 30px;
      }
    }

    &::before {
      content: initial;
    }

    &::after {
      background-color: ${({ theme }) => theme.colors.main};
      top: 0;
      left: -11.5px;
      transform: translate(0, 0);
    }
  }
`;
