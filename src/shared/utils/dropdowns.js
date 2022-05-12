import appStore from 'shared/store';

import { dropdowns } from 'shared/store/reducers/dropdowns';

import getOptions from './options';

const dropdownOptions = {
  setOptions: async serviceProps => {
    const optionsRes = await getOptions(serviceProps);
    appStore.dispatch(dropdowns({ key: 'userProjects', value: optionsRes }));
  },
};

export default dropdownOptions;
