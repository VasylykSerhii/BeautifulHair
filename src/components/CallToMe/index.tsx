import Heading from 'components/Heading';
import { Buttons } from 'assets/styles';
import React from 'react';
import { WrapperBtn } from './styled-components';

const { ButtomWhile } = Buttons;

interface ICalltomeProps {
  btnFunc: () => void;
}

const Calltome = ({ btnFunc }: ICalltomeProps): JSX.Element => {
  return (
    <>
      <Heading light title="Хочеш зробити процедуру?" />
      <WrapperBtn>
        <ButtomWhile onClick={btnFunc}> Напиши мені </ButtomWhile>
      </WrapperBtn>
    </>
  );
};

export default Calltome;
