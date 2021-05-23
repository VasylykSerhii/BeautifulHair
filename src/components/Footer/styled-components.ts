import styled from "styled-components";

export const FooterWrap = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
`;
