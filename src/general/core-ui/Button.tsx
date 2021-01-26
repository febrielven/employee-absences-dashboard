import React, {ReactNode} from 'react';
import {createStyles, withStyles, WithStyles} from '@material-ui/core';
import MaterialButton, {ButtonProps} from '@material-ui/core/Button';
import classNames from 'classnames';

import {BUTTON} from '../constants/colors';

type ButtonType = 'default' | 'primary' | 'secondary';

type Props = WithStyles<typeof styles> &
  ButtonProps & {
    onPress: (event:any) => void;
    buttonType?: ButtonType;
    isLoading?: boolean;
    disabled?: boolean;
    children?: ReactNode;
  };

function Button(props: Props) {
  let {
    children,
    classes,
    isLoading,
    disabled,
    onPress,
    buttonType = 'default' as ButtonType,
    ...otherProps
  } = props;

  let buttonStyle = disabled
    ? classes.coreStyle
    : classNames(classes.coreStyle, classes[buttonType]);

  return (
    <div>
      <MaterialButton
        variant="contained"
        onClick={onPress}
        disabled={disabled}
        className={buttonStyle}
        disableRipple={isLoading}
        {...otherProps}
      >
        {children}
      </MaterialButton>
    </div>
  );
}

const styles = createStyles({
  coreStyle: {
    fontWeight: 'bold',
  },
  default: {
    borderColor: BUTTON.default.border,
    backgroundColor: BUTTON.default.background,
    color: BUTTON.default.text,
    border: '1px solid',
    '&:hover': {
      backgroundColor: BUTTON.default.hover,
    },
  },
  primary: {
    borderColor: BUTTON.primary.border,
    backgroundColor: BUTTON.primary.background,
    border: '1px solid',
    '&:hover': {
      backgroundColor: BUTTON.primary.hover,
    },
  },
  secondary: {
    backgroundColor: BUTTON.secondary.background,
    color: BUTTON.secondary.text,
    '&:hover': {
      backgroundColor: BUTTON.secondary.hover,
    },
  },
});

export default withStyles(styles)(Button);
