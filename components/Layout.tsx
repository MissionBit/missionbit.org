import * as React from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import themeOptions from "src/theme";
import Lato from "./fonts/Lato";
import Poppins from "./fonts/Poppins";
import GoogleAnalytics from "./GoogleAnalytics";
import absoluteUrl from "src/absoluteUrl";
import { BuildTimeContext } from "./BuildTimeContext";

export interface LayoutStaticProps {
  buildTime: number;
}

export interface LayoutProps extends LayoutStaticProps {
  title: string;
  alerts?: React.ReactNode;
  headerChildren?: React.ReactNode;
  headerClassName?: string;
  footerClassName?: string;
  pageImage?: string;
  description?: string;
  requireDocumentSize?: boolean;
  canonicalPath?: string;
  origin?: string;
}

const DEFAULT_DESCRIPTION =
  "Mission Bit is a 501(c)3 non-profit offering coding education and industry experiences to equip, empower and inspire public school youth to build products they dream up and broaden the opportunity horizon they envision for themselves.";

function updateDocumentSize() {
  if (typeof document === "undefined") {
    return;
  }
  const el = document.documentElement;
  el.style.setProperty("--document-width", `${el.clientWidth}px`);
  el.style.setProperty("--document-height", `${el.clientHeight}px`);
}

export const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  headerClassName,
  footerClassName,
  headerChildren,
  alerts,
  pageImage,
  description,
  buildTime,
  canonicalPath,
  origin,
  requireDocumentSize = false,
}) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);
  useEffect(() => {
    updateDocumentSize();
    if (requireDocumentSize) {
      window.addEventListener("resize", updateDocumentSize);
      return () => window.removeEventListener("resize", updateDocumentSize);
    }
  }, [requireDocumentSize]);
  const theme = useMemo(() => createTheme(themeOptions), []);
  const router = useRouter();
  const canonicalUrl = absoluteUrl(canonicalPath ?? router.asPath, origin);
  return (
    <BuildTimeContext.Provider value={buildTime}>
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
          content={absoluteUrl(
            pageImage ?? "/images/social/logo-fb.png",
            origin
          )}
        />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Mission Bit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          property="og:description"
          content={description ?? DEFAULT_DESCRIPTION}
        />
        <meta name="description" content={description ?? DEFAULT_DESCRIPTION} />
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="any"
          href="/images/icon128.svg"
        />
        {[256, 128, 64].map((size) => (
          <link
            key={size}
            rel="icon"
            href={`/images/icon${size}.png`}
            sizes={`${size}x${size}`}
            type="image/png"
          />
        ))}
      </Head>
      <GoogleAnalytics />
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
    </BuildTimeContext.Provider>
  );
};

export const getStaticProps: GetStaticProps<LayoutStaticProps> = async () => {
  const props = await getLayoutStaticProps();
  return { props };
};

export async function getLayoutStaticProps(): Promise<LayoutStaticProps> {
  return { buildTime: Date.now() };
}

export default Layout;
