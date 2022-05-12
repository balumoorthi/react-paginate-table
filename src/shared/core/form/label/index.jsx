import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

const Label = ({ labelProps, id, labelClassName }) => {
  const { name, className } = labelProps;

  if (name) {
    return (
      <label htmlFor={id} className={classNames(labelClassName, className)}>
        {name}
      </label>
    );
  }
  return null;
};

Label.defaultProps = {
  labelProps: {},
  labelClassName: '',
};

Label.propTypes = {
  labelProps: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
};

export default Label;
