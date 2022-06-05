import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Main } from '../styled-components';

interface IProps {
  title: string;
  children: React.ReactNode;
}

function LoginLayout({ title, children }: IProps): JSX.Element {
  const router = useRouter();

  const url = router && router.pathname;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:url" content={url} />
        <link rel="icon" href="/favicon.png" />=
      </Head>

      <Main notOffsetTop>{children}</Main>
    </div>
  );
}

LoginLayout.defaultProps = {
  notOffsetTop: false,
};

export default LoginLayout;
