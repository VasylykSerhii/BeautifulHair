import { IInfoBlock } from "components/Services/interface";
import React from "react";
import {
  Wrapper,
  ImgWrap,
  Img,
  Content,
  Title,
  Desc,
  List,
  ListItem,
} from "./styled-components";

interface IProps extends IInfoBlock {
  reverse?: boolean;
}

function InfoImg({ title, desc, img, list, reverse }: IProps): JSX.Element {
  return (
    <Wrapper reverse={reverse}>
      <ImgWrap>
        <Img src={img} />
      </ImgWrap>
      <Content>
        <Title>{title}</Title>
        {desc && <Desc>{desc}</Desc>}
        {list && (
          <List>
            {list.map((el) => (
              <ListItem key={el}>{el}</ListItem>
            ))}
          </List>
        )}
      </Content>
    </Wrapper>
  );
}

InfoImg.defaultProps = {
  reverse: false,
};

export default InfoImg;
