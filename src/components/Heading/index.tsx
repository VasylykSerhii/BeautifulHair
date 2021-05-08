import { Container } from "@material-ui/core";
import React from "react";
import { Wrapper, Title, Description } from "./styled-components";

interface IProps {
  title: string;
  desc?: string;
}

function Heading({ title, desc = null }: IProps): JSX.Element {
  return (
    <Container>
      <Wrapper>
        {title && <Title>{title}</Title>}
        {desc && <Description>{desc}</Description>}
      </Wrapper>
    </Container>
  );
}
Heading.defaultProps = {
  desc: null,
};
export default Heading;
