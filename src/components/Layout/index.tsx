import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Menu from "components/Menu";
import CustomScroll from "components/Layout/CustomScroll";
import { Main } from "./styled-components";

interface IProps {
  title: string;
  children: React.ReactNode;
  notOffsetTop?: boolean;
}

function Default({ title, children, notOffsetTop }: IProps): JSX.Element {
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
        <Main notOffsetTop={notOffsetTop}>{children}</Main>
      </CustomScroll>
      {/* <Footer/> */}
    </div>
  );
}

Default.defaultProps = {
  notOffsetTop: false,
};

export default Default;
