import { device } from "assets/styles";
import styled, { css } from "styled-components";

interface IWraperProps {
  reverse?: boolean;
}

export const Block = styled.div``;
export const ImgWrap = styled.div`
  max-width: 45.5%;
  width: 100%;
  display: flex;
  align-items: flex-start;

  @media ${device.mobileL} {
    margin-top: 20px;
    max-width: 100%;
  }
`;
export const Img = styled.img`
  width: 100%;
  border-radius: 0 8px 8px 0;

  @media ${device.mobileL} {
    border-radius: 0;
  }
`;
export const Content = styled.div`
  padding: 0 1rem;
  width: calc(480px + 2rem);
  margin-left: calc(46px - 1rem);
  max-width: 55%;

  @media ${device.mobileL} {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
  }
`;
export const Title = styled.h4`
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.title};

  @media ${device.tablet} {
    font-size: 24px;
  }
`;
export const Desc = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.desc};
`;

export const Wrapper = styled.div<IWraperProps>`
  display: flex;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media ${device.mobileL} {
    flex-direction: column-reverse;
  }

  ${({ reverse }) =>
    reverse &&
    css`
      ${Content} {
        margin-right: calc(46px - 1rem);
        margin-left: 0;

        @media ${device.mobileL} {
          width: 100%;
          max-width: 100%;
          margin-right: 0;
        }
      }

      ${Img} {
        border-radius: 8px 0 0 8px;

        @media ${device.mobileL} {
          border-radius: 0;
        }
      }
    `};
`;

export const List = styled.ol``;

export const ListItem = styled.li`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.desc};
  position: relative;
  padding-left: 1rem;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  &::before {
    content: "";
    width: 0.42rem;
    height: 0.42rem;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.main};
  }
`;
