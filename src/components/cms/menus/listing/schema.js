import { getMenu } from 'services/cms/menu';

const MenuTableSchema = {
  table: {
    header: {
      title: 'Menus',
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
      edit: {},
      remove: {},
    },
  },

  service: {
    method: getMenu,
    responseFormat: {},
    params: {},
  },

  toolbar: {
    bulkActionIsVisible: false,
    actionBtn: {
      edit: {},
      remove: {},
    },
  },
};

export default MenuTableSchema;
