import React, { createElement } from 'react';

import PropTypes from 'prop-types';

import DForm from 'shared/core/form';

import { Input, InputNumber } from 'shared/core/form/fields';

const keysToComponentMap = {
  Input,
  InputNumber,
};

const DFormObj = ({ options, onSubmit, resetForm }) => {
  const { formProps, schema, fields, initialValues } = options;

  if (options && formProps && schema && fields) {
    return (
      <DForm
        {...formProps}
        formProps={{ schema, onSubmit, initialValues }}
        resetForm={resetForm}
      >
        {Object.keys(fields).map(key => {
          const field = fields[key];
          return createElement(keysToComponentMap[field.type], {
            ...field.props,
            key,
          });
        })}
      </DForm>
    );
  }

  return null;
};

DFormObj.defaultProps = {
  resetForm: false,
};

DFormObj.propTypes = {
  options: PropTypes.objectOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.bool,
};

export default DFormObj;
