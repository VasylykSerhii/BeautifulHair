import React from "react";
import { serviceData } from "components/Services/data";
import Layout from "components/Layout";
import { GetServerSideProps } from "next";
import { IServiceData } from "components/Services/interface";

interface IProps {
  data: IServiceData;
}
export default function ServicesDetail({ data }: IProps): JSX.Element {
  return <Layout title={`BH | ${data.title}`}>{data.title}</Layout>;
}

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
) => {
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
