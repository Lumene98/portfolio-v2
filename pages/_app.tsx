import React from 'react';
import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'basier_circleregular';
  src: url('fonts/basiercircle-regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'basier_circlebold';
  src: url('fonts/basiercircle-bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

html,
body{
  padding: 0;
  margin: 0;
  font-family: basier_circleregular, basier_circlebold;
  background-color: #000;
}


a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

const theme = {
  colors: {
    primary: '#fafafa',
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
