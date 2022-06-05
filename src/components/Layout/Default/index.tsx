import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Menu from 'components/Menu';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useRedux, useScrollBarDara } from 'hooks';

import Footer from 'components/Footer';
import { Main } from '../styled-components';
import { selectHooks } from 'store/selects';

interface IProps {
  title: string;
  children: React.ReactNode;
  notOffsetTop?: boolean;
}

function Default({ title, children, notOffsetTop }: IProps): JSX.Element {
  const router = useRouter();

  const url = router && router.pathname;
  const { select } = useRedux();
  const { setScrollDir, setOffsetTop } = useScrollBarDara();
  const { isScrollDown } = select(selectHooks);

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y < prevPos.y;
    setOffsetTop(Math.abs(currPos.y - (notOffsetTop ? 0 : 88)));
    if (isShow !== isScrollDown) setScrollDir(!isScrollDown);
  });

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:url" content={url} />
        <link rel="icon" href="/favicon.png" />=
      </Head>
      <Menu />

      <Main notOffsetTop={notOffsetTop}>{children}</Main>
      <Footer />
    </div>
  );
}

Default.defaultProps = {
  notOffsetTop: false,
};

export default Default;
