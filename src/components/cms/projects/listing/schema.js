import { usersProject } from 'services/cms/projects';

const ProjectTableSchema = {
  table: {
    header: {
      title: 'Projects',
    },

    columns: [
      {
        Header: 'Project Name',
        accessor: 'project_name',
      },
      {
        Header: 'Description',
        accessor: 'description',
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
    method: usersProject,
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

export default ProjectTableSchema;
