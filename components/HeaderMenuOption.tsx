import * as React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import {
  usePopupState,
  bindHover,
  bindMenu,
  PopupState
} from "material-ui-popup-state/hooks";

export interface HeaderMenuOptionProps {
  title: React.ReactNode;
  popupId: string;
  children: (popupState: PopupState) => React.ReactNode;
  href?: string;
}

const HeaderMenuOption: React.SFC<HeaderMenuOptionProps> = ({
  title,
  popupId,
  children,
  href
}) => {
  const popupState = usePopupState({ variant: "popover", popupId });
  return (
    <>
      <Button href={href} {...bindHover(popupState)}>
        {title}
      </Button>
      <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {children(popupState)}
      </Menu>
    </>
  );
};

export default HeaderMenuOption;
