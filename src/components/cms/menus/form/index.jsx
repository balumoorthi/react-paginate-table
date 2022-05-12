import React from 'react';

import PropTypes from 'prop-types';

import DForm from 'shared/core/form';

import { Input, Select } from 'shared/core/form/fields';


import MenuSchema from './schema';

const MenuForm = ({ initValue, onSubmit }) => {

  return (
    <DForm
      fieldProps={{ id: 'menuForm', className: 'row' }}
      formProps={{
        onSubmit,
        schema: MenuSchema,
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

MenuForm.propTypes = {
  initValue: PropTypes.objectOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MenuForm;
