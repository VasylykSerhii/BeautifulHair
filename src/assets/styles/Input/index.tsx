import React from "react";
import {
  InputWrap,
  Label,
  InputField,
  Textarea,
  InputMaskField,
} from "./styled-components";

interface IProps {
  label: string;
  value?: string;
  placeholder?: string;
  type?: string;
  mask?: string;
  onChange: (e?: string) => void;
}

const typeInput = (type) => {
  switch (type) {
    case "textarea":
      return Textarea;
    case "mask-input":
      return InputMaskField;
    default:
      return InputField;
  }
};

function Input({ label, type, value, onChange, ...rest }: IProps) {
  const InputSelect = typeInput(type);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange(e.target.value);
  };

  return (
    <InputWrap>
      <Label htmlFor={label}>{label}</Label>
      <InputSelect id={label} {...rest} value={value} onChange={handleChange} />
    </InputWrap>
  );
}

Input.defaultProps = {
  placeholder: false,
  value: null,
  type: null,
  mask: null,
};

export default Input;
