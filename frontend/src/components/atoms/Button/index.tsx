import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import theme from "../../../theme";


interface ButtonProps extends MuiButtonProps {
  backgroundColor?: string;
}

const Button = ({ backgroundColor, children, ...props }: ButtonProps) => {
  return (
    <MuiButton
      {...props}
      sx={{
        ...props.sx,
        textTransform: "none",
        backgroundColor: backgroundColor,
        "&:hover": {
          backgroundColor: backgroundColor,
          borderColor: theme.palette.icon.lowEmp,
        },
      }}
      disableRipple
      disableTouchRipple
      disableFocusRipple
      disableElevation
      data-testid="button"
    >
      {children}
    </MuiButton>
  );
};

export default Button;
