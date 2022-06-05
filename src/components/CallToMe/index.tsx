import Heading from 'components/Heading';
import { Buttons, Container } from 'assets/styles';
import React from 'react';
import { WrapperBtn } from './styled-components';

const { ButtomWhile } = Buttons;

interface ICalltomeProps {
  btnFunc: () => void;
}

const Calltome = ({ btnFunc }: ICalltomeProps): JSX.Element => {
  return (
    <Container>
      <Heading light title="Хочеш зробити процедуру?" />
      <WrapperBtn>
        <ButtomWhile onClick={btnFunc}> Напиши мені </ButtomWhile>
      </WrapperBtn>
    </Container>
  );
};

export default Calltome;
