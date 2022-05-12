import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

const DForm = ({
  fieldProps,
  formProps,
  containerProps,
  children,
  resetForm,
}) => {
  const { schema, onSubmit, initialValues, mode } = formProps;

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { ...initialValues },
    shouldUnregister: true,
    mode,
  });

  useEffect(() => {
    if (resetForm) {
      reset(initialValues);
    }
  }, [initialValues]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...fieldProps}>
      {React.Children.map(children, child => {
        if (child) {
          return React.cloneElement(child, {
            control,
            register,
            errors,
            parentContainerProps: containerProps,
          });
        }
        return null;
      })}
    </form>
  );
};

DForm.defaultProps = {
  fieldProps: {},
  containerProps: {},
  resetForm: false,
};

DForm.propTypes = {
  fieldProps: PropTypes.objectOf(PropTypes.any),
  formProps: PropTypes.objectOf(PropTypes.any).isRequired,
  containerProps: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.objectOf(PropTypes.any),
  ]).isRequired,
  resetForm: PropTypes.bool,
};

export default DForm;
