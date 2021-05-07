import { Theme, darken } from "@material-ui/core/styles";

export const buttonStyles = (color: string) => (theme: Theme) =>
  ({
    outlined: {
      color,
      border: `2px solid ${color}`,
      "&:hover": {
        border: `2px solid ${color}`,
        backgroundColor: color,
        color: theme.palette.common.white,
      },
    },
    contained: {
      color: theme.palette.common.white,
      backgroundColor: color,
      "&:hover": {
        backgroundColor: darken(color, 0.2),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: color,
        },
      },
    },
  } as const);

export default buttonStyles;
