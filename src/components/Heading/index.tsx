import { Container } from "assets/styles";
import React from "react";
import { Wrapper, Title, Description } from "./styled-components";

interface IProps {
  title: string;
  desc?: string;
  light?: boolean;
}

function Heading({ title, light, desc = null }: IProps): JSX.Element {
  return (
    <Container>
      <Wrapper>
        {title && <Title light={light}>{title}</Title>}
        {desc && <Description>{desc}</Description>}
      </Wrapper>
    </Container>
  );
}
Heading.defaultProps = {
  desc: null,
  light: false,
};
export default Heading;
