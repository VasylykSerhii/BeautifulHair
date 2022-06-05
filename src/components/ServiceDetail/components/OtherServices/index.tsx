import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { servicesData } from 'components/Services/data';
import ServicesCard from 'components/ServicesCard';
import Heading from 'components/Heading';
import { getRandomFromArray } from 'utils';
import { Wrapper, Content } from './styled-components';

function OtherServices(): JSX.Element {
  const [services, setServices] = useState(servicesData.list);
  const { slug } = useRouter().query;

  useEffect(() => {
    setServices(
      getRandomFromArray(
        servicesData.list.filter((item) => item.slug !== slug),
        2,
      ),
    );
  }, [slug]);

  return (
    <Wrapper>
      <Heading title="Інші Послуги" />
      <Content>
        {services.map((item) => (
          <ServicesCard data={item} key={item.title} />
        ))}
      </Content>
    </Wrapper>
  );
}

export default OtherServices;
