import { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "redux/store";
import reset from 'styled-reset'

import { themes } from "constants/index";

const GlobalStyle = createGlobalStyle`
  ${reset};

  body{
    background-color: ${(props) => props.theme.colors.bodyBg};
    color: ${(props) => props.theme.colors.gray};
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
    color: ${(props) => props.theme.colors.gray}
  }
`

function App({ Component, pageProps }: AppProps) {


  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App