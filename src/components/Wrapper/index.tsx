import { Containers } from 'assets/styles';
import React from 'react';
import { Wrap } from './styled-components';

interface IProps {
  children: React.ReactNode;
  forwardedRef?: any;
  fullWidth?: boolean;
}

const { ContainerFullWidth, Container } = Containers;
function Wrapper({ children, fullWidth, forwardedRef }: IProps): JSX.Element {
  const StyleContainer = fullWidth ? ContainerFullWidth : Container;

  return (
    <Wrap ref={forwardedRef}>
      <StyleContainer>{children}</StyleContainer>
    </Wrap>
  );
}

Wrapper.defaultProps = {
  light: false,
};

export default Wrapper;
