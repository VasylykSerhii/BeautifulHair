import React from 'react';
import { Wrapper, Title, Description } from './styled-components';

interface IProps {
  title: string;
  desc?: string;
  light?: boolean;
}

function Heading({ title, light, desc = null }: IProps): JSX.Element {
  return (
    <Wrapper>
      {title && <Title light={light}>{title}</Title>}
      {desc && <Description>{desc}</Description>}
    </Wrapper>
  );
}
Heading.defaultProps = {
  desc: null,
  light: false,
};
export default Heading;
