import appStore from 'shared/store';

import {
  openSidebar,
  breadcrumb,
  selectedProject,
} from 'shared/store/reducers/app';

const appDetails = {
  openSidebar: bool => {
    appStore.dispatch(openSidebar(bool));
  },

  breadcrumb: payload => {
    appStore.dispatch(breadcrumb(payload));
  },

  project: payload => {
    appStore.dispatch(selectedProject(payload));
  },
};

export default appDetails;
