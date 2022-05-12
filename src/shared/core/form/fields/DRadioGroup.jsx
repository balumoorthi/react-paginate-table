import React from 'react';

import { Controller } from 'react-hook-form';

import { Radio } from 'antd';

import { v4 as uuidv4 } from 'uuid';

import DFieldLayout from './DFieldLayout';

import { DInputDefaultPropTypes, DInputPropTypes } from '../proptypes';

const DRadioGroup = props => {
  const { fieldProps, control } = props;

  return (
    <DFieldLayout layoutProps={props}>
      <Controller
        name={fieldProps.name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Radio.Group
            {...field}
            {...fieldProps}
            onChange={ev => {
              field.onChange(ev);
            }}
          >
            {fieldProps.options &&
              fieldProps.options.map(item => (
                <Radio key={uuidv4()} value={item.value}>
                  {item.label}
                </Radio>
              ))}
          </Radio.Group>
        )}
      />
    </DFieldLayout>
  );
};

DRadioGroup.defaultProps = DInputDefaultPropTypes;

DRadioGroup.propTypes = DInputPropTypes;

export default DRadioGroup;
