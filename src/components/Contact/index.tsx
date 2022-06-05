import Heading from 'components/Heading';
import React, { useState } from 'react';
import { string, object, SchemaOf } from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTelegramPlane, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { Buttons, Container } from 'assets/styles';
import Input from 'components/Input';

import { regEmail, regPhone } from 'utils';
import { sendMail } from 'services/mail';
import {
  Form,
  Grid,
  InfoDesc,
  InfoItem,
  InfoLink,
  InfoLinksWrap,
  InfoTitle,
  InfoWrap,
  StyledFontAwesomeIcon,
} from './styled-components';

const { ButtomPrimary } = Buttons;

export interface IDataMessage {
  name: string;
  phone: string;
  email: string;
  text: string;
}
interface IErrors {
  name: string;
  phone: string;
  email: string;
}

const schema: SchemaOf<IDataMessage> = object().shape({
  name: string().required("Поле ім'я обов'язкове").min(3, 'Мінінум 3 символа').max(30, 'Максимум 30 символа'),
  phone: string().required("Поле номер телефону обов'язкове").matches(regPhone, 'Номер телфону не вірний'),
  email: string().required("Поле електронної пошти обов'язкове").matches(regEmail, 'Електронна пошта не вірна'),
  text: string(),
});

function Contact() {
  const [values, setValues] = useState<IDataMessage>();
  const [errors, setErrors] = useState<IErrors | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = () => {
    setErrors(null);

    schema
      .validate(values, { abortEarly: false })
      .then(() => {
        sendMail({ ...values });
      })

      .catch((err) => {
        err.inner.forEach((e) => {
          setErrors((prevState) => {
            return { ...prevState, [e.path]: e.message };
          });
        });
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
              <StyledFontAwesomeIcon icon={faMapMarkerAlt} fixedWidth />
              <InfoDesc>Самбірський р-н., с.Бісковичі</InfoDesc>
            </InfoLink>
          </InfoItem>
          <InfoItem>
            <InfoLink href="mailto:vasylyk97@gmail.com">
              <StyledFontAwesomeIcon icon={faEnvelope} fixedWidth />
              <InfoDesc>vasylyk97@gmail.com</InfoDesc>
            </InfoLink>
          </InfoItem>
          <InfoItem>
            <InfoLink href="tel:+380988803187">
              <StyledFontAwesomeIcon icon={faPhone} fixedWidth />
              <InfoDesc>+38 098 88 03 187</InfoDesc>
            </InfoLink>
          </InfoItem>
          <InfoTitle>В мережах:</InfoTitle>
          <InfoLinksWrap>
            <InfoLink href="tg://resolve?domain=masha_bukliv" target="_blank">
              <StyledFontAwesomeIcon icon={faTelegramPlane} fixedWidth />
            </InfoLink>
            <InfoLink href="http://instagram.com/_u/vasylyk_marusia/" target="_blank">
              <StyledFontAwesomeIcon icon={faInstagram} />
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
            error={errors?.name}
          />
          <Input
            label="Номер Телефону"
            value={values?.phone}
            onChange={handleChange}
            type="mask-input"
            mask="+38 (099) 99 99 999"
            placeholder="Введіть Номер Телефону*"
            name="phone"
            error={errors?.phone}
          />
          <Input
            label="Електронна пошта"
            value={values?.email}
            onChange={handleChange}
            placeholder="Введіть Електронну пошту*"
            name="email"
            error={errors?.email}
          />
          <Input
            label="Опис"
            value={values?.text}
            onChange={handleChange}
            type="textarea"
            placeholder="Опишіть ваше звернення"
            name="text"
          />

          <ButtomPrimary type="button" onClick={handleSubmit}>
            Відправити
          </ButtomPrimary>
        </Form>
      </Grid>
    </Container>
  );
}

export default Contact;
