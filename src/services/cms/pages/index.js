import ax from '../../index';

const pageService = {
  getpage: (pageId, params) => ax.get(`pages/${pageId}`, { params }),

  getpages: params => ax.get(`listpages?offset=0&limit=5`, { params }),

  addpage: payload => ax.post(`pages`, payload),

  updatepage: (payload, id) => ax.put(`pages/${id}`, payload),

  removepage: id => ax.delete(`pages/${id.page_id}`),
};

export const { getpage, getpages, addpage, updatepage, removepage } =
  pageService;
