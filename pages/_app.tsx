import { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "redux/store";
import reset from "styled-reset";

import { themes } from "constants/index";
import { device } from "assets/styles";

type Props = {
  theme: typeof themes.defaultTheme;
};

const GlobalStyle = createGlobalStyle<Props>`
  ${reset};

  html {
    font-size: 21px;

    @media ${device.tablet} {
      font-size: 18px;
    }

    @media ${device.mobileL} {
      font-size: 16px;
    }
  }

  body{
    background-color: ${({ theme }) => theme.colors.bodyBg};
    color: ${({ theme }) => theme.colors.gray};
  }

  body *,
  h1,
  * {
    font-family: 'Nunito Sans', sans-serif;
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray}
  }

  h1{
    font-size: 3.05rem;
    line-height: 120%;
  }

  h2{
    font-size: 2.44rem;
    line-height: 125%;
  }

  h3{
    font-size: 1.95rem;
    line-height: 130%;
  }

  h4{
    font-size: 1.56rem;
    line-height: 135%;
  }

  h5{
    font-size: 1.25rem;
    line-height: 140%;
  }
  
  h6{
    font-size: 1.25rem;
    line-height: 140%;
  }

  p{
    font-size: 1rem;
    line-height: 145%;
  }
`;

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
