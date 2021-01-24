import React, {forwardRef, ReactNode, Ref} from 'react';
import TextField, {TextFieldProps} from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import {TEXT_INPUT} from '../constants/colors';

type TypeInput = 'text' | 'password';

export type TextInputCoreUIProps = TextFieldProps & {
  onChangeText?: (input: string) => void;
  label?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  readOnly?: boolean;
  typeInput?: TypeInput
};

function TextInput(props: TextInputCoreUIProps, ref: Ref<HTMLDivElement>) {
  let {
    label,
    onChangeText,
    leftElement,
    rightElement,
    readOnly,
    disabled,
    style,
    typeInput= 'text',
    ...otherProps
  } = props;

  let combinedStyle = {
    ...(disabled ? {backgroundColor: TEXT_INPUT.disable} : {}),
    ...style,
  };

  return (
    <TextField
      color="primary"
      label={label}
      ref={ref}
      variant="outlined"
      onChange={
        onChangeText
          ? (event) => {
              onChangeText && onChangeText(event.target.value);
            }
          : undefined
      }
      style={combinedStyle}
      disabled={disabled || readOnly}
      InputProps={{
        startAdornment: leftElement ? (
          <InputAdornment position="start">{leftElement}</InputAdornment>
        ) : undefined,
        endAdornment: rightElement ? (
          <InputAdornment position="end">{rightElement}</InputAdornment>
        ) : undefined,
      }}
      {...otherProps}
    />
  );
}

export default forwardRef(TextInput);
