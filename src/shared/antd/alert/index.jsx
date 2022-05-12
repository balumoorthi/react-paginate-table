import React from 'react';

import PropTypes from 'prop-types';

import { Alert } from 'antd';

const DAlert = ({ alertProps }) => <Alert {...alertProps} />;

DAlert.defaultProps = {
  alertProps: {},
};

DAlert.propTypes = {
  alertProps: PropTypes.objectOf(PropTypes.any),
};

export default DAlert;
