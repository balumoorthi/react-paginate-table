import { getSlider } from 'services/cms/slider';

const SliderTableSchema = {
  table: {
    header: {
      title: 'Sliders',
    },

    columns: [
      {
        Header: 'Title',
        accessor: 'title',
        disableFilters: true,
      },
      {
        Header: 'Created At',
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
    method: getSlider,
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

export default SliderTableSchema;
