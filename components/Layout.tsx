import * as React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export interface LayoutProps {
  title: string;
  headerChildren?: React.ReactNode;
  headerClassName?: string;
  footerClassName?: string;
}

const ShortcutPng: React.SFC<{ size: number }> = ({ size }) => (
  <link
    rel="shortcut icon"
    href={`/images/icon${size}.png`}
    sizes={`${size}x${size}`}
    type="image/png"
  />
);

const Layout: React.SFC<LayoutProps> = ({
  title,
  children,
  headerClassName,
  footerClassName,
  headerChildren
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1.0, width=device-width, shrink-to-fit=no"
      />
      {[64, 128, 256].map(size => (
        <ShortcutPng key={size} size={size} />
      ))}
    </Head>
    <Header className={headerClassName}>{headerChildren}</Header>
    {children}
    <Footer className={footerClassName} />
  </div>
);

export default Layout;
