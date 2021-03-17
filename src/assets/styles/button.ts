import styled from "styled-components";

const Buttom = styled.div`
  transition: ${({ theme }) => theme.trns};
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
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
  border: 2px solid $main;
  padding: 0 40px;
  font-size: 20px;
  height: 60px;
  color: $main;
  background-color: transparent;
  display: flex;
  align-items: center;
  width: fit-content;

  &:hover {
    color: $white;
    background-color: $main;
  }
`;

export default { Buttom, ButtomPrimary, ButtomPrimaryReverse };
