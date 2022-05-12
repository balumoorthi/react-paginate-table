import appStore from 'shared/store';

import { toggle, custom } from 'shared/store/reducers/modal';

const modalPopup = {
  toggle: bool => {
    appStore.dispatch(toggle(bool));
  },

  custom: confirmDialogOptions => {
    appStore.dispatch(custom(confirmDialogOptions));
  },
};

export default modalPopup;
