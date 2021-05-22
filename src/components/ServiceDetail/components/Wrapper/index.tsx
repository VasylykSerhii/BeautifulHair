import React from "react";
import { Wrap } from "./styled-components";

interface IProps {
  children: React.ReactNode;
  light?: boolean;
}

function Wrapper({ children, light }: IProps): JSX.Element {
  return <Wrap light={light}>{children}</Wrap>;
}

Wrapper.defaultProps = {
  light: false,
};

export default Wrapper;
