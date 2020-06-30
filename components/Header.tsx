import * as React from "react";
import HeaderNav from "./HeaderNav";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    "@media print": {
      display: "none",
    },
  },
});

const Header: React.FC<{ className?: string; alerts: React.ReactNode }> = ({
  children,
  className,
  alerts,
}) => {
  const classes = useStyles();
  return (
    <header className={clsx(classes.root, className)}>
      {alerts}
      <HeaderNav />
      {children}
    </header>
  );
};

export default Header;
