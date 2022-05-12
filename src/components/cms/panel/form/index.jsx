import React from 'react';

import PropTypes from 'prop-types';

import DForm from 'shared/core/form';

import { Input, Select, RichTextEditor } from 'shared/core/form/fields';

import PanelSchema from './schema';

const PanelForm = ({ initValue, onSubmit }) => {
  return (
    <DForm
      fieldProps={{ id: 'panelForm', className: 'row' }}
      formProps={{
        onSubmit,
        schema: PanelSchema,
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

PanelForm.propTypes = {
  initValue: PropTypes.objectOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PanelForm;
