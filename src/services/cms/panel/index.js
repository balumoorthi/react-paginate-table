import ax from '../../index';

const accordion_id = localStorage.getItem('accordion_id');

const panelService = {
  getPanel: params => ax.get(`listPanel?accordion_id=${accordion_id}&offset=0&limit=31`, { params }),

  addPanel: payload => ax.post(`panel`, payload),

  updatePanel: (payload, id) => ax.put(`panel/${id}`, payload),

  removePanel: id => ax.delete(`panel/${id.panel_id}?accordion_id=${id.accordion_id}/`),
};

export const { getPanel, addPanel, updatePanel, removePanel } = panelService;
