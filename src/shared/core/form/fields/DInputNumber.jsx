import React from 'react';

import { Controller } from 'react-hook-form';

import { InputNumber } from 'antd';

import DFieldLayout from './DFieldLayout';

import { DInputDefaultPropTypes, DInputPropTypes } from '../proptypes';

const DInputNumber = props => {
  const { fieldProps, control } = props;

  return (
    <DFieldLayout layoutProps={props}>
      <Controller
        name={fieldProps.name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputNumber
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

DInputNumber.defaultProps = DInputDefaultPropTypes;

DInputNumber.propTypes = DInputPropTypes;

export default DInputNumber;
