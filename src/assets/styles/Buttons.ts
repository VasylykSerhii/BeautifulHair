import styled, { css } from 'styled-components';
import device from './media';

const Buttom = styled.button<{ isBig?: boolean }>`
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
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 40px;
  font-size: 1rem;
  height: 60px;
  display: flex;
  align-items: center;
  width: fit-content;

  @media ${device.tablet} {
    height: 51px;
  }

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.main};
  }
`;

const ButtomPrimaryReverse = styled(ButtomPrimary)`
  border: 2px solid ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.main};
  background-color: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

const ButtomWhile = styled(ButtomPrimary)`
  color: ${({ theme }) => theme.colors.dark};
  border-color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    border-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

const ButtonSmall = styled(ButtomPrimary)`
  font-weight: 500;
  border: 2px solid ${({ theme }) => theme.colors.main};
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 10px 20px;
  height: 32px;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.main};
  }
`;

const GoogleButton = styled(ButtomPrimary)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 2px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default { Buttom, ButtomPrimary, ButtomPrimaryReverse, ButtomWhile, ButtonSmall, GoogleButton };
