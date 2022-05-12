import React from 'react';

import PropTypes from 'prop-types';

import { DatatableConfig } from '../theme.config';

const selectionConfig = DatatableConfig.table.selection;

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return <input type="checkbox" ref={resolvedRef} {...rest} />;
  }
);

IndeterminateCheckbox.displayName = 'IndeterminateCheckbox';

const SelectionHeader = ({ getToggleAllRowsSelectedProps }) => (
  <div className={`${selectionConfig.wrapperClassNames}`}>
    <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
  </div>
);

const SelectionCell = ({ row }) => (
  <div className={`${selectionConfig.wrapperClassNames}`}>
    <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
  </div>
);

const SelectionHeaderLazy = ({ getToggleAllPageRowsSelectedProps }) => (
  <div className={`${selectionConfig.wrapperClassNames}`}>
    <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
  </div>
);

IndeterminateCheckbox.defaultProps = {
  indeterminate: false,
};
IndeterminateCheckbox.propTypes = {
  indeterminate: PropTypes.bool,
};

SelectionHeader.defaultProps = {
  getToggleAllRowsSelectedProps: () => {},
};
SelectionHeader.propTypes = {
  getToggleAllRowsSelectedProps: PropTypes.func,
};

SelectionHeaderLazy.defaultProps = {
  getToggleAllPageRowsSelectedProps: () => {},
};
SelectionHeaderLazy.propTypes = {
  getToggleAllPageRowsSelectedProps: PropTypes.func,
};

SelectionCell.defaultProps = {
  row: {},
};
SelectionCell.propTypes = {
  row: PropTypes.objectOf(PropTypes.any),
};

export { SelectionHeader, SelectionCell, SelectionHeaderLazy };
