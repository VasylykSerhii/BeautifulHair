import styled, { css } from "styled-components";

const Buttom = styled.a<{ isBig?: boolean }>`
  transition: ${({ theme }) => theme.trns};
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 4px;

  &:focus {
    outline: none;
  }

  ${({ isBig }) =>
    isBig &&
    css`
      &&& {
        height: 64px;
        padding: 0 70px;
      }
    `}
`;

const ButtomPrimary = styled(Buttom)`
  font-weight: 500;
  border: 2px solid ${({ theme }) => theme.colors.main};
  padding: 0 40px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  height: 60px;
  display: flex;
  align-items: center;
  width: fit-content;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.main};
  }
`;

const ButtomPrimaryReverse = styled(Buttom)`
  font-weight: 500;
  border: 2px solid ${({ theme }) => theme.colors.main};
  padding: 0 40px;
  font-size: 20px;
  height: 60px;
  color: ${({ theme }) => theme.colors.main};
  background-color: transparent;
  display: flex;
  align-items: center;
  width: fit-content;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

export default { Buttom, ButtomPrimary, ButtomPrimaryReverse };
