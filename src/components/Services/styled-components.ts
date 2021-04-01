import styled from "styled-components";
import { device } from "assets/styles";

export const Wrapper = styled.div`
  width: 100%;
  margin: 120px auto;
`;

export const Title = styled.h3`
  font-size: 45px;
  text-transform: capitalize;
  text-align: center;
  font-weight: 700;
  padding-bottom: 20px;
  margin-top: 0;
  margin-bottom: 35px;
  position: relative;
  color: ${({ theme }) => theme.colors.title};

  &::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.main};
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  max-width: 770px;
  margin: 0 auto 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.desc};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 80px;

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;
