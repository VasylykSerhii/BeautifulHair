import React from "react";
import { Wrapper, Content, Title, Desc } from "./styled-components";

interface IProps {
  title: string;
  desc: string;
  colors: {
    from: string;
    to: string;
  };
  image: string;
}

function ServiceBanner({ title, desc, colors, image }: IProps): JSX.Element {
  return (
    <Wrapper colors={colors} image={image}>
      <Content>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Content>
    </Wrapper>
  );
}

export default ServiceBanner;
