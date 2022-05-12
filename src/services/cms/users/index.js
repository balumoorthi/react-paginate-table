import ax from '../../index';

const UserService = {
  authLogin: payload => ax.post(`user/authenticate`, payload),

  getUser: userId => ax.get(`users/${userId}`),

  getUsers: () => ax.get(`listusers`),

  addUsers: payload => ax.post(`user`, payload),

  updateUsers: (payload, id) => ax.put(`user/${id}`, payload),

  removeUsers: id => ax.delete(`user/${id.user_id}`),
};

export const {
  authLogin,
  getUser,
  getUsers,
  addUsers,
  updateUsers,
  removeUsers,
} = UserService;
