import React, { ReactNode } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

import { TEXT as TEXT_COLOR } from "../constants/colors";
import { FONT_SIZE } from "../constants/size";

type FontSize = keyof typeof FONT_SIZE;
type TypeColor = keyof typeof TEXT_COLOR;

type Props = WithStyles<typeof styles> &
  TypographyProps & {
    size?: FontSize;
    typeColor?: TypeColor;
    bold?: boolean;
    style?: any;
    children?: ReactNode;
  };

function Text(props: Props) {
  let {
    size = "default",
    typeColor = "default",
    bold,
    style,
    children,
    classes,
    ...otherProps
  } = props;

  let defaultStyle = {
    fontSize: FONT_SIZE[size],
    color: TEXT_COLOR[typeColor],
  };

  let textStyle = bold ? classes.coreStyle : "";

  return (
    <Typography style={defaultStyle} className={textStyle} {...otherProps}>
      {children}
    </Typography>
  );
}
const styles = createStyles({
  coreStyle: {
    fontWeight: "bold",
  },
});

export default withStyles(styles)(Text);
