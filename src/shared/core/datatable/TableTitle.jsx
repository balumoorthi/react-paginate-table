import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

const TableTitle = ({ headerConfig }) => (
  <div className={classNames(headerConfig.WrappeprClassNames)}>
    <h2>{headerConfig.title}</h2>
  </div>
);

TableTitle.propTypes = {
  headerConfig: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TableTitle;
