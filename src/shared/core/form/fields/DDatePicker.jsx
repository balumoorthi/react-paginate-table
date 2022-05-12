import React from 'react';

import { Controller } from 'react-hook-form';

import { DatePicker } from 'antd';

import DFieldLayout from './DFieldLayout';

import { DInputDefaultPropTypes, DInputPropTypes } from '../proptypes';

const DDatePicker = props => {
  const { fieldProps, control } = props;

  return (
    <DFieldLayout layoutProps={props}>
      <Controller
        name={fieldProps.name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <DatePicker
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

DDatePicker.defaultProps = DInputDefaultPropTypes;

DDatePicker.propTypes = DInputPropTypes;

export default DDatePicker;
