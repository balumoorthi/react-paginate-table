import { getUsers } from 'services/cms/users';

const UserTableSchema = {
  table: {
    header: {
      title: 'Users',
    },

    columns: [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email_address',
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
    method: getUsers,
    responseFormat: {},
  },

  toolbar: {
    bulkActionIsVisible: false,
    actionBtn: {
      edit: {},
      remove: {},
    },
  },
};

export default UserTableSchema;
