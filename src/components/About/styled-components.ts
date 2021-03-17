import styled from "styled-components";

export const AboutWrap = styled.div`
  padding: 120px 0;
  background-color: ${({ theme }) => theme.colors.bodyBgLight};
`;

export const AboutContent = styled.div`
  width: 1200px;
  max-width: calc(100% - 60px);
  margin: auto;
  display: flex;
`;

export const TitleWrap = styled.div`
  width: 41%;
  position: relative;
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

  &:before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100px;
    height: 4px;
    background: $main;
    transition: all 0.3s;
  }
`;

export const DescWrap = styled.div`
  width: 59%;
`;

export const Desc = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 30px;
  padding-right: 90px;
`;

export const Button = styled.a``;
