import React from "react";
import Layout from "components/Layout";
import Services from "components/Services";
import Wrapper from "components/Wrapper";

function ServicesPage(): JSX.Element {
  return (
    <Layout title="BH | Послуги">
      <Wrapper>
        <Services />
      </Wrapper>
    </Layout>
  );
}

export default ServicesPage;
