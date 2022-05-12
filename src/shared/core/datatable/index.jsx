import React, { useRef, forwardRef, useImperativeHandle } from 'react';

import merge from 'lodash/merge';

import PropTypes from 'prop-types';

import get from 'lodash/get';

import { format } from 'date-fns';

import isEmpty from 'lodash/isEmpty';

import { DatatableConfig } from '../theme.config';

import ReactTable from './ReactTable';

const DTable = forwardRef(({ tableConfig }, ref) => {
  const reactTableRef = useRef();

  const DTConfig = merge({}, DatatableConfig, tableConfig);

  const [responseData, setResponseData] = React.useState({
    data: [],
    pageCount: 0,
    totalCount: 0,
    loading: false,
  });

  const fetchData = async state => {
    // get state from table
    const { pageSize } = state;

    const { responseFormat } = DTConfig.service;

    const resData = {};

    resData.loading = true;

    try {
      const tableResponse = await DTConfig.service.method({
        ...DTConfig.service?.payload,
        ...DTConfig.service?.params,
      });

      const { data } = tableResponse;

      // set data
      const formatData = isEmpty(responseFormat.data)
        ? data
        : get(data, responseFormat.data);

      resData.data = formatData;

      const formatTotal = get(data, responseFormat.total);

      const { length: dataLength } = formatData;

      // set total count
      resData.totalCount =
        DTConfig.table.lazy && responseFormat.total ? formatTotal : dataLength;

      // set page count
      resData.pageCount =
        DTConfig.table.lazy && formatTotal
          ? Math.ceil(formatTotal / pageSize)
          : Math.ceil(dataLength / pageSize);

      resData.loading = false;

      setResponseData(resData);
    } catch (err) {
      resData.loading = false;
    }
  };

  const result = responseData.data.map(userData => {
    const { status, created_at } = userData;
    return {
      ...userData,
      status: status === 0 ? 'Inactive' : 'Active',
      created_at: format(new Date(created_at), 'dd/MM/yyyy')
    }
  })

  // set forward ref
  useImperativeHandle(ref, () => ({
    reloadDTable() {
      reactTableRef.current.reloadTable();
    },
    tableRef: reactTableRef.current.tableRef,
  }));

  return (
    <ReactTable
      data={result}
      fetchData={fetchData}
      loading={responseData.loading}
      pageCount={responseData.pageCount}
      totalCount={responseData.totalCount}
      tableConfig={DTConfig}
      ref={reactTableRef}
    />
  );
});

DTable.displayName = 'DTable';

DTable.propTypes = {
  tableConfig: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DTable;
