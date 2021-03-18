import { HairExtension } from "assets/icons";
import React from "react";
import {
  Content,
  Wrapper,
  Title,
  Description,
  IconHairExtension,
} from "./styled-components";

interface IProps {
  data: {
    icon: string;
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
        <IconHairExtension size={50} color="#fff" />
        <Title>{data.title}</Title>
        <Description>{data.desc}</Description>
      </Content>
    </Wrapper>
  );
}

export default ServicesCard;
