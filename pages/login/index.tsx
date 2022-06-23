import { Layout } from 'components';
import { Login } from 'containers';
import React from 'react';

const { LoginLayout } = Layout;

function LoginPage() {
  return (
    <LoginLayout title="BH | Вхід">
      <Login />
    </LoginLayout>
  );
}

export default LoginPage;
