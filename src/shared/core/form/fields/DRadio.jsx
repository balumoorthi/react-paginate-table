import React from 'react';

import { Controller } from 'react-hook-form';

import PropTypes from 'prop-types';

import { Radio } from 'antd';

import DFieldLayout from './DFieldLayout';

import { DInputDefaultPropTypes, DInputPropTypes } from '../proptypes';

const DRadio = props => {
  const { fieldProps, control, labelProps } = props;

  return (
    <DFieldLayout layoutProps={props}>
      <Controller
        name={fieldProps.name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Radio
            {...field}
            {...fieldProps}
            onChange={ev => {
              field.onChange(ev);
            }}
          >
            {labelProps.name}
          </Radio>
        )}
      />
    </DFieldLayout>
  );
};

DRadio.defaultProps = {
  ...DInputDefaultPropTypes,
  labelProps: {},
};

DRadio.propTypes = {
  ...DInputPropTypes,
  labelProps: PropTypes.objectOf(PropTypes.any),
};

export default DRadio;
