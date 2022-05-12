import React from 'react';

import PropTypes from 'prop-types';

import DFormObj from 'shared/core/form/DFormObj';

import componentList from 'assets/data/components';

const ColForm = ({ componentType }) => {
  const formProps = {
    fieldProps: { id: 'addComponentForm', className: 'row' },
    containerProps: {
      className: 'col-md-6 mb-3',
      labelClassName: 'label',
    },
  };

  componentList[componentType].props.formProps = formProps;

  // const onSubmit = data => {
  //   console.log(data, componentType);
  // };

  return (
    <DFormObj
      options={componentList[componentType].props}
    // onSubmit={onSubmit}
    />
  );
};

ColForm.propTypes = {
  componentType: PropTypes.string.isRequired,
};

export default ColForm;
