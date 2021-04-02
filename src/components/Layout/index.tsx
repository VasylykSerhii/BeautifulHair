import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Menu from "components/Menu";
import CustomScroll from "components/Layout/CustomScroll";
import { Main, Container } from "./styled-components";

interface IProps {
  title: string;
  children: React.ReactNode;
}

function Default({ title, children }: IProps): JSX.Element {
  const router = useRouter();
  const url = router && router.pathname;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:url" content={url} />
      </Head>
      <Menu />

      <CustomScroll>
        <Main>
          <Container>{children}</Container>
        </Main>
      </CustomScroll>
      {/* <Footer/> */}
    </div>
  );
}

export default Default;
