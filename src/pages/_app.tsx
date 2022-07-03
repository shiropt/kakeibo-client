import "../styles/global.css";
import { AppProps } from "next/app";
import { AppMantineProvider } from "../libs/mantine";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppMantineProvider>
      <Component {...pageProps} />
    </AppMantineProvider>
  );
}
