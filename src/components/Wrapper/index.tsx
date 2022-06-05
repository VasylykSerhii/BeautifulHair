import React from 'react';
import { Wrap } from './styled-components';

interface IProps {
  children: React.ReactNode;
  light?: boolean;
  forwardedRef?: any;
}

function Wrapper({ children, light, forwardedRef }: IProps): JSX.Element {
  return (
    <Wrap ref={forwardedRef} light={light}>
      {children}
    </Wrap>
  );
}

Wrapper.defaultProps = {
  light: false,
};

export default Wrapper;
