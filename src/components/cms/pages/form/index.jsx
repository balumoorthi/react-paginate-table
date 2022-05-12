import React from 'react';

import PropTypes from 'prop-types';

import DForm from 'shared/core/form';

import { Input, Select, RichTextEditor } from 'shared/core/form/fields';

import PageSchema from './schema';

const PageForm = ({ initValue, onSubmit }) => {

  return (
    <DForm
      fieldProps={{ id: 'pageForm', className: 'row' }}
      formProps={{
        onSubmit,
        schema: PageSchema,
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
      <Input
        fieldProps={{ type: 'text', name: 'slug' }}
        labelProps={{ name: 'Slug' }}
      />
      <RichTextEditor
        fieldProps={{ type: 'text', name: 'content' }}
        labelProps={{ name: 'Content' }}
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

PageForm.propTypes = {
  initValue: PropTypes.objectOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PageForm;
