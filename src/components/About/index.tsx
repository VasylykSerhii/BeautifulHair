import React from "react";
import Link from "next/link";
import { Button } from "assets/styles";
import {
  AboutWrap,
  AboutContent,
  TitleWrap,
  Title,
  DescWrap,
  Desc,
} from "./styled-components";

interface IProps {
  desc: string[];
}

const { ButtomPrimaryReverse } = Button;

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

            <Link href="/">
              <ButtomPrimaryReverse>Мої роботи</ButtomPrimaryReverse>
            </Link>
          </DescWrap>
        )}
      </AboutContent>
    </AboutWrap>
  );
}

export default About;
