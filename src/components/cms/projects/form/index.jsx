import React from 'react';

import PropTypes from 'prop-types';

import DForm from 'shared/core/form';

import { Input, Select, TextArea } from 'shared/core/form/fields';

import ProjectSchema from './schema';

const ProjectForm = ({ initValue, onSubmit }) => {

  return (
    <DForm
      fieldProps={{ id: 'projectForm', className: 'row' }}
      formProps={{
        onSubmit,
        schema: ProjectSchema,
        initialValues: initValue,
      }}
      containerProps={{
        className: 'mb-3',
        labelClassName: 'label',
      }}
    >
      <Input
        fieldProps={{ type: 'text', name: 'project_name' }}
        labelProps={{ name: 'Project Name' }}
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
      <TextArea
        fieldProps={{ type: 'text', name: 'description' }}
        labelProps={{ name: 'Description' }}
      />
    </DForm>
  );
};

ProjectForm.propTypes = {
  // isEdit: PropTypes.bool.isRequired,
  initValue: PropTypes.objectOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ProjectForm;
