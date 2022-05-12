import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

const Error = ({ errorProps, errors, name }) => {
  if (errors[name]) {
    return (
      <p className={classNames(errorProps.className, 'invalid-feedback')}>
        {errors[name]?.message}
      </p>
    );
  }
  return null;
};

Error.defaultProps = {
  errors: {},
  errorProps: {},
  name: '',
};

Error.propTypes = {
  errors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.any),
  ]),
  errorProps: PropTypes.objectOf(PropTypes.any),
  name: PropTypes.string,
};

export default Error;
