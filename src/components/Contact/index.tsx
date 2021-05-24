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

import { Buttons, Container } from "assets/styles";
import Input from "components/Input";

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
const initialState = {
  name: "",
  email: "",
  text: "",
  phone: "",
};

function Contact() {
  const [values, setValues] = useState(initialState);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

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
            value={values?.name}
            onChange={handleChange}
            placeholder="Введіть Ім'я*"
            name="name"
          />
          <Input
            label="Номер Телефону"
            value={values?.phone}
            onChange={handleChange}
            type="mask-input"
            mask="+38 (099) 99 99 999"
            placeholder="Введіть Номер Телефону*"
            name="phone"
          />
          <Input
            label="Електронна пошта"
            value={values?.email}
            onChange={handleChange}
            placeholder="Введіть Електронну пошту*"
            name="email"
          />
          <Input
            label="Опис"
            value={values?.text}
            onChange={handleChange}
            type="textarea"
            placeholder="Опишіть ваше звернення"
            name="text"
          />

          <ButtomPrimary type="button">Відправити</ButtomPrimary>
        </Form>
      </Grid>
    </Container>
  );
}

export default Contact;
