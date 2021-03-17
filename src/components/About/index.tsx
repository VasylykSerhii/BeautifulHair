import React from "react";
import {
  AboutWrap,
  AboutContent,
  TitleWrap,
  Title,
  DescWrap,
  Desc,
  Button,
} from "./styled-components";

interface IProps {
  desc: string[];
}

function About({ desc }: IProps): JSX.Element {
  return (
    <AboutWrap>
      <AboutContent>
        <TitleWrap>
          <Title>Про мене</Title>
        </TitleWrap>
        {desc && (
          <DescWrap>
            {desc && desc.map((item) => <Desc key={item}>{item}</Desc>)}

            <Button href="#">Мої роботи</Button>
          </DescWrap>
        )}
      </AboutContent>
    </AboutWrap>
  );
}

export default About;
