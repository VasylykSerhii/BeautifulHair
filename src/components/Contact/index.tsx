import Heading from "components/Heading";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTelegramPlane,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { Buttons, Container, Input } from "assets/styles";

import {
  Form,
  Grid,
  InfoDesc,
  InfoItem,
  InfoLink,
  InfoLinksWrap,
  InfoTitle,
  InfoWrap,
} from "./styled-components";

const { ButtomPrimary } = Buttons;
function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  return (
    <Container>
      <Heading title="Зв'яжіться зі мною" />
      <Grid>
        <InfoWrap>
          <InfoTitle>Мої дані:</InfoTitle>
          <InfoItem>
            <InfoLink
              href="http://maps.google.com/?q=вул.+Івана+Франка,+Бісковичі,+Львівська+область,+81457"
              target="_blank"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <InfoDesc>Самбірський р-н., с.Бісковичі</InfoDesc>
            </InfoLink>
          </InfoItem>
          <InfoItem>
            <InfoLink href="mailto:vasylyk97@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              <InfoDesc>vasylyk97@gmail.com</InfoDesc>
            </InfoLink>
          </InfoItem>
          <InfoItem>
            <InfoLink href="tel:+380988803187">
              <FontAwesomeIcon icon={faPhone} />
              <InfoDesc>+38 098 88 03 187</InfoDesc>
            </InfoLink>
          </InfoItem>
          <InfoTitle>В мережах:</InfoTitle>
          <InfoLinksWrap>
            <InfoLink href="tg://resolve?domain=masha_bukliv" target="_blank">
              <FontAwesomeIcon icon={faTelegramPlane} />
            </InfoLink>
            <InfoLink
              href="http://instagram.com/_u/vasylyk_marusia/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </InfoLink>
          </InfoLinksWrap>
        </InfoWrap>
        <Form autoComplete="off">
          <Input
            label="Ім'я"
            value={name}
            onChange={setName}
            placeholder="Введіть Ім'я"
          />
          <Input
            label="Номер Телефону"
            value={phone}
            onChange={setPhone}
            type="mask-input"
            mask="+38 (099) 99 99 999"
            placeholder="Введіть Номер Телефону"
          />
          <Input
            label="Електронна пошта"
            value={email}
            onChange={setEmail}
            placeholder="Введіть Електронну пошту"
          />
          <Input
            label="Опис"
            value={text}
            onChange={setText}
            type="textarea"
            placeholder="Опишіть ваше звернення (не обов'язково)"
          />

          <ButtomPrimary type="button">Відправити</ButtomPrimary>
        </Form>
      </Grid>
    </Container>
  );
}

export default Contact;
