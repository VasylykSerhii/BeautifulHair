import React, { useEffect, useState } from "react";
import {
  InputWrap,
  Label,
  InputField,
  Textarea,
  InputMaskField,
} from "./styled-components";

interface IProps {
  label?: string;
  value: string;
  placeholder: string;
  type?: string;
  mask?: string;
  name: string;
  onChange: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const typeInput = (type, props) => {
  switch (type) {
    case "textarea":
      return <Textarea {...props} />;
    case "mask-input":
      return <InputMaskField {...props} />;
    default:
      return <InputField {...props} />;
  }
};

const InputSelect = ({ type, ...rest }: IProps) => {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    setComponent(typeInput(type, rest));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{Component}</>;
};

function Input({ label, type, value, onChange, ...rest }: IProps) {
  return (
    <InputWrap>
      <Label htmlFor={label}>{label}</Label>
      <InputSelect {...rest} value={value} onChange={onChange} type={type} />
    </InputWrap>
  );
}

Input.defaultProps = {
  label: null,
  mask: null,
  type: null,
};

InputSelect.defaultProps = {
  type: null,
  mask: null,
  label: null,
};

export default Input;
