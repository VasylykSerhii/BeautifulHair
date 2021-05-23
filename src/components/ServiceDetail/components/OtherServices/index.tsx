import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { servicesData } from "components/Services/data";
import ServicesCard from "components/ServicesCard";
import Heading from "components/Heading";
import { getRandomFromArray } from "utils";
import { Container } from "assets/styles";
import { Wrapper, Content } from "./styled-components";

function OtherServices(): JSX.Element {
  const [services, setServices] = useState(servicesData);
  const { slug } = useRouter().query;

  useEffect(() => {
    setServices(
      getRandomFromArray(
        servicesData.filter((item) => item.slug !== slug),
        2
      )
    );
  }, [slug]);
  return (
    <Wrapper>
      <Heading title="Інші Послуги" />
      <Container>
        <Content>
          {services.map((item) => (
            <ServicesCard data={item} key={item.title} />
          ))}
        </Content>
      </Container>
    </Wrapper>
  );
}

export default OtherServices;
