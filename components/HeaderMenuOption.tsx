import * as React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
  PopupState,
} from "material-ui-popup-state/hooks";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export interface HeaderMenuOptionProps {
  title: React.ReactNode;
  popupId: string;
  children: (popupState: PopupState) => React.ReactNode;
  href?: string;
}

const HeaderMenuOption: React.FC<HeaderMenuOptionProps> = ({
  title,
  popupId,
  children,
}) => {
  const popupState = usePopupState({ variant: "popover", popupId });
  return (
    <>
      <Button {...bindTrigger(popupState)}>
        {title} <ArrowDropDownIcon />
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
