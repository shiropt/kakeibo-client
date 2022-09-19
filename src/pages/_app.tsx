import "../styles/global.css";
import { AppProps } from "next/app";
import { AppMantineProvider } from "../libs/mantine";
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import { parseCookies } from "nookies";
import { useEffect } from "react";

const App = (props: AppProps, ctx: NextPageContext) => {
  const { Component, pageProps } = props;
  const router = useRouter();
  const cookies = parseCookies(ctx);

  // useEffect(() => {
  //   router.beforePopState(({ url }) => {
  //     if (url !== "/login" && url !== "/_error") {
  //       if (typeof cookies.auth === "undefined") {
  //         // CSR用リダイレクト処理
  //         window.location.href = "/login";
  //         return false;
  //       }
  //     }
  //     return true;
  //   });
  // }, []);
  const component =
    typeof pageProps === "undefined" ? null : (
      <AppMantineProvider>
        <Component {...pageProps} />
      </AppMantineProvider>
    );

  return (
    <AppMantineProvider>
      <Component {...pageProps} />
    </AppMantineProvider>
  );
};

export default App;
