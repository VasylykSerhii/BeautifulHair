import Heading from "components/Heading";
import { IServiceData } from "components/Services/interface";
import React from "react";
import ServiceBanner from "./components/Banner";
import NumbersSlider from "./components/NumbersSlider";
import Wrapper from "./components/Wrapper";
import OtherServices from "./components/OtherServices";

interface IProps {
  data: IServiceData;
}

function ServiceDetail({ data }: IProps): JSX.Element {
  return (
    <div>
      <ServiceBanner
        title={data.title}
        desc={data.desc}
        colors={data.colors}
        image={data.images}
      />
      {data.numbers && (
        <Wrapper>
          <Heading title={data.numbers.title} desc={data.numbers.desc} />
          <NumbersSlider numbers={data.numbers.list} />
        </Wrapper>
      )}

      <Wrapper>
        <OtherServices />
      </Wrapper>
    </div>
  );
}

export default ServiceDetail;
