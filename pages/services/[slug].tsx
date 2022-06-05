import React from 'react';
import { serviceData } from 'components/Services/data';
import { Layout } from 'components';
import { GetServerSideProps } from 'next';
import { IServiceData } from 'components/Services/interface';
import ServiceDetail from 'components/ServiceDetail';

interface IProps {
  data: IServiceData;
}
export default function ServicesDetail({ data }: IProps): JSX.Element {
  return (
    <Layout.Default title={`BH | ${data.title}`}>
      <ServiceDetail data={data} />
    </Layout.Default>
  );
}

export const getServerSideProps: GetServerSideProps<IProps> = async (context) => {
  const slug = context.params.slug as string;
  const data = serviceData(slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
};
