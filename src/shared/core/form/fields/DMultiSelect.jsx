import React, { useEffect, useState } from 'react';

import { Controller } from 'react-hook-form';

import PropTypes from 'prop-types';

import Select, { components } from 'react-select';

import getOptions from 'shared/utils/options';

import DFieldLayout from './DFieldLayout';

import { DInputDefaultPropTypes, DInputPropTypes } from '../proptypes';

const ValueContainer = props => {
  const { getValue, children, selectProps } = props;

  const { showPlusItems } = selectProps;

  const { length } = getValue();

  return (
    <components.ValueContainer {...props}>
      {length > showPlusItems ? (
        <>
          {children[0][0]}
          {!selectProps.menuIsOpen && ` + ${length - 1} Items`}
          {React.cloneElement(children[1])}
        </>
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{children}</>
      )}
    </components.ValueContainer>
  );
};

const DMultiSelect = props => {
  const { fieldProps, control, serviceProps } = props;

  const [options, setOptions] = useState([]);

  useEffect(async () => {
    if (!fieldProps.options && serviceProps) {
      const optionsRes = await getOptions(serviceProps);
      setOptions(optionsRes);
    }
  }, []);

  return (
    <DFieldLayout layoutProps={props}>
      <Controller
        name={fieldProps.name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <Select
            showPlusItems={
              fieldProps.showPlusItems ? fieldProps.showPlusItems : 1
            }
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            isMulti
            isClearable={false}
            options={options}
            components={{ ValueContainer }}
            onChange={ev => {
              onChange(ev?.map(item => item.value));
            }}
            onBlur={onBlur}
            value={options.filter(option => value?.includes(option.value))}
            defaultValue=""
          />
        )}
      />
    </DFieldLayout>
  );
};

DMultiSelect.defaultProps = DInputDefaultPropTypes;

DMultiSelect.propTypes = DInputPropTypes;

ValueContainer.propTypes = {
  getValue: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.objectOf(PropTypes.any),
  ]).isRequired,
  selectProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DMultiSelect;
