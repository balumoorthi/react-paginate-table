import React from 'react';

import { Controller } from 'react-hook-form';

import { Input } from 'antd';

import DFieldLayout from './DFieldLayout';

import { DInputDefaultPropTypes, DInputPropTypes } from '../proptypes';

const DInput = props => {
  const { fieldProps, control } = props;

  return (
    <DFieldLayout layoutProps={props}>
      <Controller
        name={fieldProps.name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            {...field}
            {...fieldProps}
            onChange={ev => {
              field.onChange(ev);
            }}
          />
        )}
      />
    </DFieldLayout>
  );
};

DInput.defaultProps = DInputDefaultPropTypes;

DInput.propTypes = DInputPropTypes;

export default DInput;
