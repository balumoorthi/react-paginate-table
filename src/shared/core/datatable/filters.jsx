import React, { useState } from 'react';

import { useAsyncDebounce } from 'react-table';

import PropTypes from 'prop-types';

import Select from 'react-select';

import { DatatableConfig } from '../theme.config';

const { globalSearch, filter: tcFilter } = DatatableConfig.table;

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter);

  const onChange = useAsyncDebounce(ev => {
    setGlobalFilter(ev || '');
  }, 200);

  return (
    <div className={`${globalSearch.wrapperClassNames}`}>
      <label htmlFor="gs" className={`${globalSearch.labelClassNames}`}>
        Search
      </label>
      <input
        name="gs"
        value={value || ''}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        className={`${globalSearch.classNames}`}
      />
    </div>
  );
};

// Define a default UI for filtering
const DefaultColumnFilter = ({ column: { filterValue, setFilter } }) => (
  <div className={`${tcFilter.filterWrapperClassNames}`}>
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined);
      }}
      className={`${tcFilter.fieldClassNames}`}
    />
  </div>
);

const SelectFilter = ({ column: { filterValue, setFilter } }) => (
  <Select
    value={filterValue || ''}
    options={[
      { label: 'Polygender', value: 'Polygender' },
      { label: 'Bigender', value: 'Bigender' },
    ]}
    onChange={ev => {
      setFilter(ev.value || undefined);
    }}
  />
);

GlobalFilter.defaultProps = {
  globalFilter: '',
};

GlobalFilter.propTypes = {
  globalFilter: PropTypes.string,
  setGlobalFilter: PropTypes.func.isRequired,
};

DefaultColumnFilter.propTypes = {
  column: PropTypes.objectOf(PropTypes.any).isRequired,
};

SelectFilter.propTypes = {
  column: PropTypes.objectOf(PropTypes.any).isRequired,
};

export { GlobalFilter, DefaultColumnFilter, SelectFilter };
