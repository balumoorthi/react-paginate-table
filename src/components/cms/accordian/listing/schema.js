import { getAccordion } from 'services/cms/accordion';

const AccordionTableSchema = {
  table: {
    header: {
      title: 'Accordion',
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
      next:{
        isVisible: true,
      },
      edit: {},
      remove: {},
    },
  },

  service: {
    method: getAccordion,
    responseFormat: {},
    params: {},
  },

  toolbar: {
    bulkActionIsVisible: false,
    actionBtn: {
      edit: {},
      remove: {},
      next:{}
    },
  },
};

export default AccordionTableSchema;
