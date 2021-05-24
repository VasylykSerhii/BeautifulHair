import { device } from "assets/styles";
import InputMask from "react-input-mask";

import styled, { css } from "styled-components";

const InputStyled = css`
  border: none;
  color: ${({ theme }) => theme.colors.gray};
  padding: 6px 25px;
  height: 2.85rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.bodyBgLight};
  transition: ${({ theme }) => theme.trns};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    outline: none;
    box-shadow: 0px 10px 14px 0px rgb(0 12 29 / 10%);
  }
`;

export const InputField = styled.input`
  ${InputStyled}

  @media ${device.mobileL} {
  }
`;

export const InputMaskField = styled(InputMask)`
  ${InputStyled}
  @media ${device.mobileL} {
  }
`;

export const Textarea = styled.textarea`
  ${InputStyled}
  resize: none;
  padding-top: 16px;
  width: 100%;
  height: 11rem;
  @media ${device.mobileL} {
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.4rem;
`;

export const Label = styled.label`
  margin-bottom: 0.67rem;
`;
