import React from 'react';

import PropTypes from 'prop-types';

import DForm from 'shared/core/form';

import { Input, Select } from 'shared/core/form/fields';

import { getMenuItems } from 'services/cms/menuItems';

import MenuItemsSchema from './schema';

const MenuItemsForm = ({ initValue, onSubmit }) => {

  return (
    <DForm
      fieldProps={{ id: 'menuItemForm', className: 'row' }}
      formProps={{
        onSubmit,
        schema: MenuItemsSchema,
        initialValues: initValue,
      }}
      containerProps={{
        className: 'mb-3',
        labelClassName: 'label',
      }}
    >
      <Input
        fieldProps={{ type: 'text', name: 'label' }}
        labelProps={{ name: 'Label' }}
      />
      <Input
        fieldProps={{ type: 'text', name: 'link' }}
        labelProps={{ name: 'Link' }}
      />
      <Select
        fieldProps={{
          name: 'new_tab',
          closeMenuOnSelect: false,
        }}
        staticOptions={[
          { label: "Yes", value: 1 },
          { label: "No", value: 0 }
        ]}
        labelProps={{ name: 'Open In New Tab' }}
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
        labelProps={{ name: 'Status' }}
      />
      <Select
        fieldProps={{
          name: 'parent_id',
          closeMenuOnSelect: false,
          isMulti: true,
        }}
        serviceProps={{
          method: getMenuItems,
          params: {},
          payload: {},
          label: 'label',
          value: 'parent_id',
        }}
        labelProps={{ name: 'Parent' }}
      />
    </DForm>
  );
};

MenuItemsForm.propTypes = {
  initValue: PropTypes.objectOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MenuItemsForm;
