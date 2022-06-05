import React from 'react';
import { Buttons, Container } from 'assets/styles';
import { BannerWrap, ContentWrap, Content, Title, Description, Img, ButtonWrap } from './styled-components';

interface IProps {
  title: string;
  desc: string;
  img?: string;
  btnText: string;
  btnFunc?: () => void;
}
const { ButtomPrimary } = Buttons;

export default function Banner({ title, desc, img, btnText, btnFunc }: IProps): JSX.Element {
  return (
    <Container>
      <BannerWrap>
        <ContentWrap>
          <Content>
            <Title>{title}</Title>
            <Description>{desc}</Description>
            <ButtonWrap>
              <ButtomPrimary isBig onClick={btnFunc}>
                {btnText}
              </ButtomPrimary>
            </ButtonWrap>
          </Content>
          {img && <Img src={img} alt="person" />}
        </ContentWrap>
      </BannerWrap>
    </Container>
  );
}
