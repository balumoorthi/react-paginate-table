import React from 'react';

import { Controller } from 'react-hook-form';

import { Input } from 'antd';

import DFieldLayout from './DFieldLayout';

import { DInputDefaultPropTypes, DInputPropTypes } from '../proptypes';

const { TextArea } = Input;

const DTextArea = props => {
  const { fieldProps, control } = props;

  return (
    <DFieldLayout layoutProps={props}>
      <Controller
        name={fieldProps.name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextArea
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

DTextArea.defaultProps = DInputDefaultPropTypes;

DTextArea.propTypes = DInputPropTypes;

export default DTextArea;
