import React from "react";
import Heading from "components/Heading";
import ServicesCard from "components/ServicesCard";
import { Container } from "@material-ui/core";
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
      <Container>
        <Content>
          {servicesData.map((item) => (
            <ServicesCard data={item} key={item.title} />
          ))}
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Services;
