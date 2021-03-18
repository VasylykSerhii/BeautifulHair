import React from "react";
import { Wrapper, Title, Description } from "./styled-components";

interface IProps {
  title: string;
  desc: string;
}

function Heading({ title, desc }: IProps): JSX.Element {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {desc && <Description>{desc}</Description>}
    </Wrapper>
  );
}

export default Heading;
