// import { lStorage } from '../utils/storage';

const interceptor = ax => {
const projectid = localStorage.getItem('project_id');
  ax.interceptors.request.use(
    config => {
      const token = localStorage.getItem('authToken')
        ? localStorage.getItem('authToken')
        : null;

      const HeaderConfig = config;

      HeaderConfig.headers = {
        Authorization: `${token}`,
        projectid : `${projectid}`
      };
      return HeaderConfig;
    },

    error => {
      Promise.reject(error);
    }
  );
};

export default interceptor;
