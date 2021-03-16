import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Menu from 'components/Menu'
import CustomScroll from 'components/Layout/CustomScroll'

function Default({ title, children }): JSX.Element {
  const router = useRouter();
  const url = router && router.pathname;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:url" content={url} />
      </Head>
      <Menu />
      <main>
        <CustomScroll >
          {children}
        </CustomScroll>
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default Default
