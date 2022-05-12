import React, { useEffect, forwardRef, useImperativeHandle } from 'react';

import {
  useTable,
  usePagination,
  useGlobalFilter,
  useFilters,
  useSortBy,
  useRowSelect,
} from 'react-table';

import Select from 'react-select';

import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import Pagination from './pagination';

import { GlobalFilter, DefaultColumnFilter } from './filters';

import Toolbar from './toolbar';

import TableTitle from './TableTitle';

import {
  SelectionHeaderLazy,
  SelectionHeader,
  SelectionCell,
} from './selection';

const ReactTable = forwardRef(
  (
    {
      tableConfig,
      data = [],
      fetchData = () => {},
      loading,
      pageCount: controlledPageCount,
      totalCount,
    },
    ref
  ) => {
    // var shortforms

    const { toolbar } = tableConfig;

    const {
      columns,
      lazy,
      layout,
      globalSearch,
      pagination,
      actions,
      pageSize: tcPageSize,
      filter: tcFilter,
    } = tableConfig.table;

    // var shortforms

    const defaultColumn = React.useMemo(
      () => ({ Filter: DefaultColumnFilter }),
      []
    );

    const tableRef = useTable(
      {
        columns,
        data,
        defaultColumn,
        initialState: { pageIndex: 0, pageSize: tcPageSize.defaultSize },
        manualPagination: lazy,
        pageCount: controlledPageCount,
        manualSortBy: lazy,
        manualFilters: lazy,
        manualGlobalFilter: lazy,
      },
      useGlobalFilter,
      useFilters,
      useSortBy,
      usePagination,
      useRowSelect,
      hooks => {
        if (
          tableConfig.table.selection.isVisible &&
          tableConfig.toolbar.bulkActionIsVisible
        ) {
          hooks.visibleColumns.push(cols => [
            {
              id: 'id',
              Header: lazy ? SelectionHeaderLazy : SelectionHeader,
              Cell: SelectionCell,
            },
            ...cols,
          ]);
        }
      }
    );

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      setGlobalFilter,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      setPageSize,
      selectedFlatRows,
      // state
      state: { globalFilter, pageIndex, pageSize, sortBy, filters },
      state,
    } = tableRef;

    useImperativeHandle(ref, () => ({
      reloadTable() {
        fetchData(state);
      },
      tableRef,
    }));

    useEffect(() => {
      if (!lazy) fetchData(state);
    }, []);

    useEffect(() => {
      if (lazy) fetchData(state);
    }, [pageIndex, pageSize]);

    useEffect(() => {
      if (globalFilter && lazy) fetchData(state);
    }, [globalFilter]);

    useEffect(() => {
      if (sortBy.length > 0 && lazy) fetchData(state);
    }, [sortBy]);

    useEffect(() => {
      if (filters.length > 0 && lazy) fetchData(state);
    }, [filters]);

    return (
      <div className={`${layout.wrapperClassNames}`}>
        {tableConfig.toolbar.bulkActionIsVisible && (
          <TableTitle headerConfig={tableConfig.table.header} />
        )}

        <Toolbar
          headerConfig={tableConfig.table.header}
          options={toolbar}
          tableRowInfo={selectedFlatRows}
        />

        <div className={`${layout.sectionClassNames}`}>
          <div className={`${layout.gloablFilterWrapperClassName}`}>
            {tcPageSize.isVisible && (
              <div className={tcPageSize.classNames}>
                <label htmlFor="rpp">{tcPageSize.labelText}</label>
                <Select
                  id="rpp"
                  styles={tcPageSize.dropdownStyle}
                  onChange={ev => {
                    setPageSize(Number(ev.value));
                  }}
                  options={tcPageSize.size}
                  placeholder=""
                  defaultValue={{
                    label: tcPageSize.defaultSize,
                    value: tcPageSize.defaultSize,
                  }}
                />
              </div>
            )}
            {globalSearch.isVisible && (
              <GlobalFilter
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            )}
          </div>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                // eslint-disable-next-line react/jsx-key
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    // eslint-disable-next-line react/jsx-key
                    <th {...column.getHeaderProps()}>
                      <div className={tcFilter.wrapperClassNames}>
                        <div
                          {...column.getSortByToggleProps()}
                          className={tcFilter.sortWrapperClassNames}
                        >
                          {column.render('Header')}
                          <span>
                            {column.isSorted && (
                              <i className={tcFilter.sortDownIcon} />
                            )}
                            {column.isSortedDesc && (
                              <i className={tcFilter.sortUpIcon} />
                            )}
                          </span>
                        </div>
                        {column.canFilter ? column.render('Filter') : null}
                      </div>
                    </th>
                  ))}
                  <th className="action-th">Actions</th>
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={uuidv4()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} key={uuidv4()}>
                        {cell.render('Cell')}
                      </td>
                    ))}
                    <td>
                      <div className="action-items">
                        {Object.keys(actions).map(key => {
                          const item = actions[key];
                          return (
                            item.isVisible && (
                              <button
                                type="button"
                                key={uuidv4()}
                                className={`${item.classNames} ${item.isDisable}`}
                                onClick={ev => {
                                  item.onClick(row.original, ev);
                                }}
                              >
                                <i className={item.icon} />
                              </button>
                            )
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            options={{
              canPreviousPage,
              canNextPage,
              pageOptions,
              pageCount,
              gotoPage,
              setPageSize,
              pageIndex,
              totalCount,
              config: pagination,
            }}
          />
        </div>

        {loading && lazy && <div className={`${layout.loaderClassNames}`} />}
      </div>
    );
  }
);

ReactTable.displayName = 'ReactTable';

ReactTable.propTypes = {
  tableConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  pageCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
};

export default ReactTable;
