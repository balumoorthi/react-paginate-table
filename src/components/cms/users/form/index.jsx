import React from 'react';

import PropTypes from 'prop-types';

import DForm from 'shared/core/form';

import { Input, MultiSelect, Select } from 'shared/core/form/fields';

import { getProjects } from 'services/cms/projects';

import { UsersAddSchema, UsersUpdateSchema } from './schema';

const UsersForm = ({ isEdit, initValue, onSubmit }) => {

  return (
    <DForm
      fieldProps={{ id: 'userForm', className: 'row' }}
      formProps={{
        onSubmit,
        schema: isEdit ? UsersUpdateSchema : UsersAddSchema,
        initialValues: initValue,
      }}
      containerProps={{
        className: 'mb-3',
        labelClassName: 'label',
      }}
    >
      <Input
        fieldProps={{ type: 'text', name: 'name' }}
        labelProps={{ name: 'User Name' }}
      />

      {!isEdit && (
        <Input
          fieldProps={{ type: 'email', name: 'email_address' }}
          labelProps={{ name: 'Email' }}
        />
      )}

      <MultiSelect
        fieldProps={{
          name: 'project_id',
          closeMenuOnSelect: false,
          isMulti: true,
        }}
        serviceProps={{
          method: getProjects,
          params: {},
          payload: {},
          label: 'project_name',
          value: 'project_id',
        }}
        labelProps={{ name: 'Projects' }}
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

UsersForm.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  initValue: PropTypes.objectOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default UsersForm;
