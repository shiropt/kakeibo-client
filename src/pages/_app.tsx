import "../styles/global.css";
import { AppProps } from "next/app";
import { AppMantineProvider } from "../libs/mantine";
import { NextPageContext } from "next";
import { ErrorBoundary } from "react-error-boundary";

const App = (props: AppProps, ctx: NextPageContext) => {
  const { Component, pageProps } = props;

  return (
    // <ErrorBoundary FallbackComponent={}>
    <AppMantineProvider>
      <Component {...pageProps} />
    </AppMantineProvider>
    // </ErrorBoundary>
  );
};

export default App;
