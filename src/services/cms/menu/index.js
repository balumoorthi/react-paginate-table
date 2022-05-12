import ax from '../../index';

const menuService = {
  getMenu: params => ax.get(`listmenus?offset=0&limit=30`, { params }),

  // getMenus: params => ax.get(`menus/`, { params }),

  addMenu: payload => ax.post(`menus`, payload),

  updateMenu: (payload, id) => ax.put(`menus/${id}`, payload),

  removeMenu: id => ax.delete(`menus/${id.menu_id}`),
};

export const { getMenu, addMenu, updateMenu, removeMenu } = menuService;
