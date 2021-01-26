import { render } from '@testing-library/react';
import React, {ChangeEvent} from 'react';
import {Controller, UseControllerOptions} from 'react-hook-form';
import {TextInput, TextInputCoreUIProps} from '../core-ui';

type Props = UseControllerOptions &
  TextInputCoreUIProps & {
    transformOutput?: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => any;
  };

function ControlledTextInput(props: Props) {
  let {
    control,
    name,
    rules,
    transformOutput,
    defaultValue = '',
    value='',
    ...textInputProps
  } = props;
  console.log('render');
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({onChange, ...controllerProps}) => (
        <TextInput
          {...textInputProps}
          {...controllerProps}
          onChange={
            transformOutput
              ? (data) => {
                  onChange(transformOutput && transformOutput(data));
                }
              : onChange
          }
        />
      )}
    />
  );
}

export default ControlledTextInput;
