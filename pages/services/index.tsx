import React from 'react';
import { Layout, Services, Wrapper } from 'components';

function ServicesPage(): JSX.Element {
  return (
    <Layout.Default title="BH | Послуги">
      <Wrapper>
        <Services />
      </Wrapper>
    </Layout.Default>
  );
}

export default ServicesPage;
