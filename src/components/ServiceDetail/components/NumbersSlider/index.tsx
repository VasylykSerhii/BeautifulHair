import React, { useState } from "react";
import { IServiceNumbers } from "components/Services/interface";
import { useMediaQuery } from "hooks/useMediaQuery";
import {
  Slider,
  SliderLine,
  SliderLineLaptop,
  Title,
  Desc,
  Num,
  Container,
  Item,
} from "./styled-components";

interface IProps {
  numbers: IServiceNumbers[];
}

function NumbersSlider({ numbers }: IProps): JSX.Element {
  const [currentItem, setCurrentItem] = useState(0);
  const [lastCurrentItem, setLastCurrentItem] = useState(0);

  const getLastCurrentItem = (idx) => {
    setLastCurrentItem(currentItem);
    setCurrentItem(idx);
  };
  let transform;
  let transform2;
  const upLaptop = !useMediaQuery(1280);
  const upMobile = !useMediaQuery(600);

  if (upLaptop) {
    transform = { transform: `scaleX(${currentItem * 0.2})` };
  } else if (upMobile) {
    if (currentItem < 3) {
      transform = {
        transform: `scaleX(${currentItem * 0.4})`,
        transition: `${lastCurrentItem < 4 ? 0.5 : 0.25}s`,
        transitionDelay: `${lastCurrentItem < 4 ? 0 : 0.25}s`,
      };
      transform2 = {
        transform: `scaleX(0)`,
        transition: `${lastCurrentItem > 5 ? 0 : 0.25}s`,
      };
    } else {
      transform = {
        transform: `scaleX(0.8)`,
        transition: `${lastCurrentItem < 2 ? 0.25 : 0}s`,
      };
      transform2 = {
        transform: `scaleX(${(currentItem - 3) * 0.4})`,
        transition: `${lastCurrentItem < 2 ? 0.25 : 0.5}s`,
        transitionDelay: `${lastCurrentItem < 2 ? 0.25 : 0}s`,
      };
    }
  }

  return (
    <Slider>
      <SliderLine style={transform} />
      <SliderLineLaptop style={transform2} />
      <Container>
        {numbers.map((item, idx) => (
          <Item
            key={`item-${item.title}-${idx.toString()}`}
            active={currentItem === idx || undefined}
            onClick={() => getLastCurrentItem(idx)}
          >
            <Num>0{idx + 1}</Num>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
          </Item>
        ))}
      </Container>
    </Slider>
  );
}

export default NumbersSlider;
