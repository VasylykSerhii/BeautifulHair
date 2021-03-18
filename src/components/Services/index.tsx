import React from "react";
import Heading from "components/Heading";
import ServicesCard from "components/ServicesCard";
import { servicesData } from "./data";
import { Wrapper, Content } from "./styled-components";

interface IProps {
  title: string;
  desc: string;
}

function Services({ title, desc }: IProps): JSX.Element {
  return (
    <Wrapper>
      <Heading title={title} desc={desc} />
      <Content>
        {servicesData.map((item) => (
          <ServicesCard data={item} key={item.title} />
        ))}
      </Content>
    </Wrapper>
  );
}

export default Services;
