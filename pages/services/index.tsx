import React from "react";
import Layout from "components/Layout";
import Services from "components/Services";

function ServicesPage(): JSX.Element {
  return (
    <Layout title="BH | Послуги">
      <Services
        title="Послуги"
        desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
    officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
    omnis iste natur"
      />
    </Layout>
  );
}

export default ServicesPage;
