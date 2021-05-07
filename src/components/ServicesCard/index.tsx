import React from "react";
import Link from "next/link";
import { IServiceData } from "components/Services/interface";
import {
  Content,
  Wrapper,
  Title,
  Description,
  IconWrap,
} from "./styled-components";

interface IProps {
  data: IServiceData;
}

function ServicesCard({ data }: IProps): JSX.Element {
  return (
    <Link
      href={`/services/${data.slug}`}
      as={`/services/${data.slug}`}
      passHref
    >
      <Wrapper colors={data.colors} image={data.images}>
        <Content>
          <IconWrap>{data.icon}</IconWrap>
          <Title>{data.title}</Title>
          <Description>{data.desc}</Description>
        </Content>
      </Wrapper>
    </Link>
  );
}

export default ServicesCard;
