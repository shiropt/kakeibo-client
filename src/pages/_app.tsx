import "../styles/global.css";
import { AppProps } from "next/app";
import { AppMantineProvider } from "../libs/mantine";
import { NextPageContext } from "next";

const App = (props: AppProps, ctx: NextPageContext) => {
  const { Component, pageProps } = props;

  return (
    <AppMantineProvider>
      <Component {...pageProps} />
    </AppMantineProvider>
  );
};

export default App;
