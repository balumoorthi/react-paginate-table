import React from 'react';

import { Controller } from 'react-hook-form';

import { Switch } from 'antd';

import DFieldLayout from './DFieldLayout';

import { DInputDefaultPropTypes, DInputPropTypes } from '../proptypes';

const DSwitch = props => {
  const { fieldProps, control } = props;

  return (
    <DFieldLayout layoutProps={props}>
      <Controller
        name={fieldProps.name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Switch
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

DSwitch.defaultProps = DInputDefaultPropTypes;

DSwitch.propTypes = DInputPropTypes;

export default DSwitch;
