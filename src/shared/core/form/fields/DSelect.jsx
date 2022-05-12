import React, { useEffect, useState } from 'react';

import { Controller } from 'react-hook-form';

import Select from 'react-select';

import getOptions from 'shared/utils/options';

import DFieldLayout from './DFieldLayout';

import { DInputDefaultPropTypes, DInputPropTypes } from '../proptypes';

const DSelect = props => {
  const { fieldProps, control, serviceProps, staticOptions } = props;

  const [options, setOptions] = useState([]);

  useEffect(async () => {
    if (!fieldProps.options && serviceProps) {
      const optionsRes = await getOptions(serviceProps);
      setOptions(optionsRes);
    } else if (staticOptions) {
      setOptions(staticOptions);
    }
  }, []);

  return (
    <DFieldLayout layoutProps={props}>
      <Controller
        name={fieldProps.name}
        control={control}
        render={({ field: { onChange, value, name, ref } }) => {
          const currentSelection = options.find(c => c.value === value);

          const handleSelectChange = selectedOption => {
            onChange(selectedOption?.value);
          };

          return (
            <Select
              inputRef={ref}
              value={currentSelection}
              name={name}
              options={options}
              onChange={handleSelectChange}
            />
          );
        }}
      />
    </DFieldLayout>
  );
};

DSelect.defaultProps = DInputDefaultPropTypes;

DSelect.propTypes = DInputPropTypes;

export default DSelect;
