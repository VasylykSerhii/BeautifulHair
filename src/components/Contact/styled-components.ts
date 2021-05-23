import { device } from "assets/styles";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr;
  grid-gap: 30px;
  margin-top: 80px;

  @media ${device.tablet} {
    margin-top: 70px;
  }

  @media ${device.mobileL} {
    margin-top: 40px;
    grid-template-columns: 1fr;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.h5`
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 20px;
`;

export const InfoItem = styled.div`
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const InfoDesc = styled.p`
  margin-left: 10px;
`;

export const InfoLink = styled.a`
  color: ${({ theme }) => theme.colors.gray1};
  transition: ${({ theme }) => theme.trns};
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }

  &:not(:first-of-type) {
    margin-left: 15px;
  }
`;
export const InfoLinksWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Form = styled.form``;
