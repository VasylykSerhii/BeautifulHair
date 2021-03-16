import styled, { css } from "styled-components";

export const TrackVertical = styled.div`
  top: 2px;
  bottom: 2px;
  right: 2px;
  border-radius: 3px;
  z-index: 9999;
`;

export const ThumbVertical = styled.div`
  position: relative;
  display: block;
  width: 100%;
  cursor: pointer;
  border-radius: inherit;
  background-color: ${(props) => props.theme.colors.main};
`