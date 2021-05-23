import Heading from "components/Heading";
import { Buttons, Container } from "assets/styles";
import React from "react";
import { WrapperBtn } from "./styled-components";

const { ButtomWhile } = Buttons;

function Calltome() {
  return (
    <Container>
      <Heading light title="Хочеш зробити процедуру?" />
      <WrapperBtn>
        <ButtomWhile> Напиши мені </ButtomWhile>
      </WrapperBtn>
    </Container>
  );
}

export default Calltome;
