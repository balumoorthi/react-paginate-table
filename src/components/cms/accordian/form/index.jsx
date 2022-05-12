import React from 'react';

import PropTypes from 'prop-types';

import DForm from 'shared/core/form';

import { Input, Select } from 'shared/core/form/fields';

import AccordionSchema from './schema';

const AccordionForm = ({ initValue, onSubmit }) => {

  return (
    <DForm
      fieldProps={{ id: 'accordionForm', className: 'row' }}
      formProps={{
        onSubmit,
        schema: AccordionSchema,
        initialValues: initValue,
      }}
      containerProps={{
        className: 'mb-3',
        labelClassName: 'label',
      }}
    >
      <Input
        fieldProps={{ type: 'text', name: 'title' }}
        labelProps={{ name: 'Title' }}
      />
      <Select
        fieldProps={{
          name: 'status',
          closeMenuOnSelect: false,
        }}
        staticOptions={[
          { label: "Active", value: 1 },
          { label: "Inactive", value: 0 }
        ]}
        labelProps={{ name: 'status' }}
      />
    </DForm>
  );
};

AccordionForm.propTypes = {
  initValue: PropTypes.objectOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AccordionForm;
