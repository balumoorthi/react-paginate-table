import { getpages } from 'services/cms/pages';

const PageTableSchema = {
  table: {
    header: {
      title: 'Pages',
    },

    columns: [
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Created On',
        accessor: 'created_at',
        disableFilters: true,
      },
      {
        Header: 'Status',
        accessor: 'status',
        disableFilters: true,
      },
    ],
    actions: {
      view:{
        isVisible: true,
      },
      edit: {},
      remove: {}
    },
  },

  service: {
    method: getpages,
    responseFormat: {},
    params: {},
  },

  toolbar: {
    bulkActionIsVisible: false,
    actionBtn: {
      view:{},
      edit: {},
      remove: {}
    },
  },
};

export default PageTableSchema;
