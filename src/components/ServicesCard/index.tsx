import React from "react";
import {
  Content,
  Wrapper,
  Title,
  Description,
  IconWrap,
} from "./styled-components";

interface IProps {
  data: {
    icon: React.ReactNode;
    title: string;
    desc: string;
    colors: {
      from: string;
      to: string;
    };
    images: string;
  };
}

function ServicesCard({ data }: IProps): JSX.Element {
  return (
    <Wrapper colors={data.colors} image={data.images}>
      <Content>
        <IconWrap>{data.icon}</IconWrap>
        <Title>{data.title}</Title>
        <Description>{data.desc}</Description>
      </Content>
    </Wrapper>
  );
}

export default ServicesCard;
