import styled from "styled-components";
import { device } from "assets/styles";

export const Wrapper = styled.div``;

export const Title = styled.h3`
  font-size: 45px;
  text-transform: capitalize;
  text-align: center;
  font-weight: 700;
  padding-bottom: 20px;
  margin-top: 0;
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
  margin: 0 auto;
  margin-top: 35px;
  text-align: center;
  color: ${({ theme }) => theme.colors.desc};
`;
