import * as React from "react";
import { useEffect } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";

export interface LayoutProps {
  title: string;
  headerChildren?: React.ReactNode;
  headerClassName?: string;
  footerClassName?: string;
}

const ShortcutPng: React.FC<{ size: number }> = ({ size }) => (
  <link
    rel="shortcut icon"
    href={`/images/icon${size}.png`}
    sizes={`${size}x${size}`}
    type="image/png"
  />
);

const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  headerClassName,
  footerClassName,
  headerChildren
}) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  });
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {[64, 128, 256].map(size => (
          <ShortcutPng key={size} size={size} />
        ))}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header className={headerClassName}>{headerChildren}</Header>
        {children}
        <Footer className={footerClassName} />
      </ThemeProvider>
    </>
  );
};

export default Layout;
