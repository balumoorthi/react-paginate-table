import { getPanel } from 'services/cms/panel';

const PanelTableSchema = {
  table: {
    header: {
      title: 'Panel',
    },

    columns: [
      {
        Header: 'Title',
        accessor: 'label',
      },
      {
        Header: 'Parent Accordion ID',
        accessor: 'panel_id',
        disableFilters: true,
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
      remove: {},
    },
  },

  service: {
    method: getPanel,
    responseFormat: {},
    params: {},
  },

  toolbar: {
    bulkActionIsVisible: false,
    actionBtn: {
      view:{},
      edit: {},
      remove: {},
    },
  },
};

export default PanelTableSchema;
