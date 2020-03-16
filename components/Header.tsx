import * as React from "react";
import HeaderNav from "./HeaderNav";

const Header: React.FC<{ className?: string; alerts: React.ReactNode }> = ({
  children,
  className,
  alerts
}) => {
  return (
    <header className={className}>
      {alerts}
      <HeaderNav />
      {children}
    </header>
  );
};

export default Header;
