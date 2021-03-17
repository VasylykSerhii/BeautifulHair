import React from "react";
import { FooterWrap } from "./styled-components";

export default function Footer(): JSX.Element {
  return (
    <FooterWrap>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </FooterWrap>
  );
}
