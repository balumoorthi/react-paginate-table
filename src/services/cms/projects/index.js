import ax from '../../index';

const ProjectService = {
  getProject: projectId => ax.get(`projects/${projectId}`),

  getProjects: () => ax.get(`listprojects`),

  addProject: payload => ax.post(`project`, payload),

  updateProject: (payload, id) => ax.put(`project/${id}`, payload),

  removeProject: id => ax.delete(`project/${id.project_id}`),

  usersProject: params => ax.get(`listprojects?offset=0&limit=3`, { params }),

};

export const {
  getProject,
  getProjects,
  addProject,
  updateProject,
  removeProject,
  usersProject,
} = ProjectService;
