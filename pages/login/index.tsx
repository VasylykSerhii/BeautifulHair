import { Buttons } from 'assets/styles';
import { Input, Layout } from 'components';
import { useFormik } from 'formik';
import React from 'react';
import { object, string } from 'yup';
import { Form, Line, Or, OrText, StyledFontAwesomeIcon, Title, Wrapper } from './styled-components';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from 'hooks/useAuth';

const { LoginLayout } = Layout;

const schema = object().shape({
  email: string().required("Поле електронної пошти обов'язкове").email('Електронна пошта не вірна'),
  password: string().required("Поле паролю обов'язкове"),
});

const initialValues = {
  email: '',
  password: '',
};

const { ButtomPrimary, GoogleButton } = Buttons;

function LoginPage() {
  const { authGoogle, authEmail } = useAuth();
  const onSubmitHandler = () => {
    authEmail({ login: values.email, password: values.password });
  };

  const { handleSubmit, handleBlur, handleChange, values, touched, errors, isValid } = useFormik({
    validationSchema: schema,
    onSubmit: onSubmitHandler,
    initialValues,
    validateOnMount: true,
  });

  return (
    <LoginLayout title="BH | Вхід">
      <Wrapper>
        <Title>Вхід</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Електронна пошта"
            value={values?.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Введіть Електронну пошту"
            name="email"
            {...(touched.email && { error: errors?.email })}
          />
          <Input
            label="Пароль"
            value={values?.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Введіть Пароль"
            name="password"
            {...(touched.password && { error: errors?.password })}
          />

          <ButtomPrimary type="submit">Ввійти</ButtomPrimary>
        </Form>

        <Or>
          <Line />
          <OrText>Або</OrText>
          <Line />
        </Or>

        <GoogleButton onClick={authGoogle}>
          Війти через Google <StyledFontAwesomeIcon icon={faGoogle} />
        </GoogleButton>
      </Wrapper>
    </LoginLayout>
  );
}

export default LoginPage;
