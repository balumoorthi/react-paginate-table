import { lStorage } from 'utils/storage';

import { signOut } from '@heartfulnessinstitute/react-hfn-profile';

import pick from 'lodash/pick';

const getLoginInfo = keys => {
  const loginDetails = lStorage.get('authInfo');
  if (loginDetails) {
    if (loginDetails.user) return pick(loginDetails.user, keys);
    return loginDetails.user;
  }
  return {};
};

const isLoginAuth = () => {
  const loginDetails = lStorage.get('authInfo');
  if (loginDetails && loginDetails.token) return true;
  return false;
};

const logout = () => {
  lStorage.clear();
  signOut();
};

export { isLoginAuth, logout, getLoginInfo };
