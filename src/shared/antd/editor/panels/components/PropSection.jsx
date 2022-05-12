import React from 'react';

import PropTypes from 'prop-types';

import DFormObj from 'shared/core/form/DFormObj';

import { generateComponent } from 'shared/utils/editor';

import compactObject from 'shared/utils/editor/compactObject';

const PropSection = ({ componentProps, componentType, parentId }) => {
  const onSubmit = data => {
    switch (componentType.name) {
      case 'Section':
      case 'Col':
      case 'Wrapper': {
        // eslint-disable-next-line no-case-declarations
        const elemProps = JSON.parse(JSON.stringify(data));
        generateComponent(
          { options: compactObject(elemProps) },
          componentType,
          parentId
        );
        break;
      }
      default:
        break;
    }
  };

  return <DFormObj options={componentProps} onSubmit={onSubmit} resetForm />;
};

PropSection.propTypes = {
  componentProps: PropTypes.objectOf(PropTypes.any).isRequired,
  componentType: PropTypes.objectOf(PropTypes.any).isRequired,
  parentId: PropTypes.string.isRequired,
};

export default PropSection;
