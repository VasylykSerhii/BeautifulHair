import React from "react";
import Heading from "components/Heading";
import { IServiceData } from "components/Services/interface";
import InfoImg from "components/InfoImg";
import ServiceBanner from "./components/Banner";
import NumbersSlider from "./components/NumbersSlider";
import Wrapper from "../Wrapper";
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

      {data.infoBlock && (
        <Wrapper>
          <InfoImg
            title={data.infoBlock.title}
            desc={data.infoBlock.desc}
            img={data.infoBlock.img}
            list={data.infoBlock.list}
          />
        </Wrapper>
      )}

      {data.infoBlockReverse && (
        <Wrapper light>
          <InfoImg
            title={data.infoBlockReverse.title}
            desc={data.infoBlockReverse.desc}
            img={data.infoBlockReverse.img}
            list={data.infoBlockReverse.list}
            reverse
          />
        </Wrapper>
      )}
      {data.numbers && (
        <Wrapper>
          <Heading title={data.numbers.title} desc={data.numbers.desc} />
          <NumbersSlider numbers={data.numbers.list} />
        </Wrapper>
      )}

      <Wrapper light>
        <OtherServices />
      </Wrapper>
    </div>
  );
}

export default ServiceDetail;
