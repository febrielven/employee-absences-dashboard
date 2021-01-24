import React from 'react';
import {createStyles, WithStyles, withStyles} from '@material-ui/core/styles';
import {Checkbox as CheckboxBFI, FormControlLabel} from '@material-ui/core';

import {Text} from './';
import {CHECKBOX} from '../constants/colors';

type Props = WithStyles<typeof styleClasses> & {
  checked: boolean;
  label?: string;
  value?: string;
  onChange: (status: boolean) => void;
  disable?: boolean;
};

function Checkbox(props: Props) {
  let {
    checked,
    classes,
    label,
    value,
    onChange,
    disable,
  } = props;

  let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div>
      <FormControlLabel
        disabled={disable}
        control={
          <CheckboxBFI
            className={classes.root}
            checked={checked}
            color="primary"
            onChange={handleChange}
            value={value}
          />
        }
        label={<Text>{label}</Text>}
      />
    </div>
  );
}

const styleClasses = createStyles({
  root: {
    color: CHECKBOX.default,
  },
  '.Mui-checked': {
    color: CHECKBOX.check,
  },
  '.Mui-disabled': {
    color: CHECKBOX.disable,
  },
});

export default withStyles(styleClasses)(Checkbox);
