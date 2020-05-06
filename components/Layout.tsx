import * as React from "react";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import themeOptions from "../src/theme";
import Lato from "./fonts/Lato";
import Poppins from "./fonts/Poppins";
import GoogleAnalytics from "./GoogleAnalytics";
import absoluteUrl from "../src/absoluteUrl";

export interface LayoutProps {
  title: string;
  alerts?: React.ReactNode;
  headerChildren?: React.ReactNode;
  headerClassName?: string;
  footerClassName?: string;
  pageImage?: string;
  description?: string;
}

const ShortcutPng: React.FC<{ size: number }> = ({ size }) => (
  <link
    rel="shortcut icon"
    href={`/images/icon${size}.png`}
    sizes={`${size}x${size}`}
    type="image/png"
  />
);

const DEFAULT_DESCRIPTION: string =
  "Mission Bit is a 501(c)3 non-profit offering coding education and industry experiences to equip, empower and inspire public school youth to build products they dream up and broaden the opportunity horizon they envision for themselves.";

const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  headerClassName,
  footerClassName,
  headerChildren,
  alerts,
  pageImage,
  description,
}) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  });
  const theme = useMemo(() => createMuiTheme(themeOptions), []);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@missionbit" />
        <meta
          property="og:image"
          content={absoluteUrl(pageImage ?? "/images/social/logo-fb.png")}
        />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Mission Bit" />
        <meta property="og:type" content="non_profit" />
        <meta property="og:url" content={absoluteUrl(router.asPath)} />
        <meta
          property="og:description"
          content={description ?? DEFAULT_DESCRIPTION}
        />
        <meta name="description" content={description ?? DEFAULT_DESCRIPTION} />
        {[64, 128, 256].map((size) => (
          <ShortcutPng key={size} size={size} />
        ))}
        <GoogleAnalytics />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Lato />
        <Poppins />
        <Header className={headerClassName} alerts={alerts}>
          {headerChildren}
        </Header>
        {children}
        <Footer className={footerClassName} />
      </ThemeProvider>
    </>
  );
};

export default Layout;
