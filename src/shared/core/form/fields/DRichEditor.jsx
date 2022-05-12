import React from 'react';

import { Controller } from 'react-hook-form';

import { CKEditor } from '@ckeditor/ckeditor5-react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import DFieldLayout from './DFieldLayout';

import { DInputDefaultPropTypes, DInputPropTypes } from '../proptypes';

const DRichEditor = props => {
  const { fieldProps, control } = props;
  return (
    <DFieldLayout layoutProps={props}>
      <Controller
        name={fieldProps.name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          < CKEditor
            editor={ClassicEditor}
            data={field.value}
            onChange={(event, editor) => {
              const richTextdata = editor.getData();
              field.onChange(
                richTextdata
              );
            }}
          />
        )}
      />
    </DFieldLayout>
  );
};

DRichEditor.defaultProps = DInputDefaultPropTypes;

DRichEditor.propTypes = DInputPropTypes;

export default DRichEditor;
