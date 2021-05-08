import React from "react";
import { Wrap } from "./styled-components";

interface IProps {
  children: React.ReactNode;
}

function Wrapper({ children }: IProps): JSX.Element {
  return <Wrap>{children}</Wrap>;
}

export default Wrapper;
