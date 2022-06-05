import React from 'react';
import { FooterWrap } from './styled-components';

export default function Footer(): JSX.Element {
  return <FooterWrap>Copyright © {new Date().getFullYear()}</FooterWrap>;
}
