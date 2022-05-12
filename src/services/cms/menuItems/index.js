import ax from '../../index';

const menu_id = localStorage.getItem('menu_id');

const menuItemsService = {


  getMenuItems: params => ax.get(`listmenusitems?menu_id=${menu_id}&offset=0&limit=3`, { params }),

  addMenuItem: payload => ax.post(`menusitems`, payload),

  updateMenuItem: (payload, id) => ax.put(`menusitems/${id}`, payload),

  removeMenuItem: id => ax.delete(`menusitems/${id.menuitems_id}?menu_id=${id.menu_id}`),
};

export const { getMenuItems, addMenuItem, updateMenuItem, removeMenuItem } = menuItemsService;
