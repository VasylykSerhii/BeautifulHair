import React from "react";
import Heading from "components/Heading";
import ServicesCard from "components/ServicesCard";
import { Container } from "assets/styles";
import { servicesData } from "./data";
import { Content, Wrapper } from "./styled-components";

function Services(): JSX.Element {
  return (
    <Wrapper>
      <Heading title={servicesData.title} desc={servicesData.desc} />
      <Container>
        <Content>
          {servicesData.list.map((item) => (
            <ServicesCard data={item} key={item.title} />
          ))}
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Services;
