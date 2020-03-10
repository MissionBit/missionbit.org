import * as React from "react";
import HeaderNav from "./HeaderNav";

const Header: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <header className={className}>
      <HeaderNav />
      {children}
    </header>
  );
};

export default Header;
