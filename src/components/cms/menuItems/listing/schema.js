import { getMenuItems } from 'services/cms/menuItems';

const MenuItemsTableSchema = {
  table: {
    header: {
      title: 'Menu Items',
    },
    columns: [
      {
        Header: 'Label',
        accessor: 'label',
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
    method: getMenuItems,
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

export default MenuItemsTableSchema;
