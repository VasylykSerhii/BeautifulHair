import React from "react";
import { Button } from "assets/styles";
import Link from "next/link";
import { Container } from "@material-ui/core";
import {
  BannerWrap,
  ContentWrap,
  Content,
  Title,
  Description,
  Img,
  ButtonWrap,
} from "./styled-components";

interface IProps {
  title: string;
  desc: string;
  img: string;
  btnText: string;
}
const { ButtomPrimary } = Button;
export default function Banner({
  title,
  desc,
  img,
  btnText,
}: IProps): JSX.Element {
  return (
    <Container>
      <BannerWrap>
        <ContentWrap>
          <Content>
            <Title>{title}</Title>
            <Description>{desc}</Description>
            <ButtonWrap>
              <Link href="/">
                <ButtomPrimary isBig>{btnText}</ButtomPrimary>
              </Link>
            </ButtonWrap>
          </Content>
          <Img src={img} alt="person" />
        </ContentWrap>
      </BannerWrap>
    </Container>
  );
}
