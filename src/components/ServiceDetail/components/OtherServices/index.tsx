import { Container } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { servicesData } from "components/Services/data";
import ServicesCard from "components/ServicesCard";
import Heading from "components/Heading";
import getRandom from "utils/getRandomFromArray";
import { Wrapper, Content } from "./styled-components";

function OtherServices(): JSX.Element {
  const [services, setServices] = useState(servicesData);
  const { slug } = useRouter().query;

  useEffect(() => {
    setServices(
      getRandom(
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
