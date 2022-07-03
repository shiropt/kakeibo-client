import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import rtlPlugin from "stylis-plugin-rtl";
import { ServerStyles, createStylesServer } from "@mantine/next";

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const stylesServer = createStylesServer({ key: "rtl", stylisPlugins: [rtlPlugin] });
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles html={initialProps.html} server={stylesServer} />
        </>
      ),
    };
  }
}
