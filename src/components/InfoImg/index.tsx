import React from "react";
import {
  Wrapper,
  ImgWrap,
  Img,
  Content,
  Title,
  Desc,
} from "./styled-components";

interface IProps {
  reverse?: boolean;
}

function InfoImg({ reverse }: IProps): JSX.Element {
  return (
    <Wrapper reverse={reverse}>
      <ImgWrap>
        <Img src="/images/termoobrabotka-1024x577.jpg" />
      </ImgWrap>
      <Content>
        <Title>Горячий ботокс</Title>
        <Desc>
          Горячий ботокс предназначен для тех, кого, кроме оздоровления,
          интересует еще и выпрямление кудрявых, непослушных, пушистых волос.
          Многие путают горячий ботокс с такими процедурами, как кератиновое
          выпрямление и нанопластика, однако между ними есть несколько
          принципиальных отличий.{" "}
        </Desc>
      </Content>
    </Wrapper>
  );
}

InfoImg.defaultProps = {
  reverse: false,
};

export default InfoImg;
