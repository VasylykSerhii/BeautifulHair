import React from 'react';
import Heading from 'components/Heading';
import ServicesCard from 'components/ServicesCard';
import { servicesData } from './data';
import { Content, Wrapper } from './styled-components';

function Services(): JSX.Element {
  return (
    <Wrapper>
      <Heading title={servicesData.title} desc={servicesData.desc} />
      <Content>
        {servicesData.list.map((item) => (
          <ServicesCard data={item} key={item.title} />
        ))}
      </Content>
    </Wrapper>
  );
}

export default Services;
