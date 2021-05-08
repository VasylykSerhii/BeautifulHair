import { Container } from "@material-ui/core";
import React from "react";
import { Wrapper, Title, Description } from "./styled-components";

interface IProps {
  title: string;
  desc: string;
}

function Heading({ title, desc }: IProps): JSX.Element {
  return (
    <Container>
      <Wrapper>
        {title && <Title>{title}</Title>}
        {desc && <Description>{desc}</Description>}
      </Wrapper>
    </Container>
  );
}

export default Heading;
