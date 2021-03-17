import { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "redux/store";
import reset from "styled-reset";

import { themes } from "constants/index";

type Props = {
  theme: typeof themes.defaultTheme;
};

const GlobalStyle = createGlobalStyle<Props>`
  ${reset};

  body{
    background-color: ${({ theme }) => theme.colors.bodyBg};
    color: ${({ theme }) => theme.colors.gray};
    min-height: 100vh;
    min-width: 100vw;
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
