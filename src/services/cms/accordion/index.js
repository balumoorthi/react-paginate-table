import ax from '../../index';

const accordionService = {
  getAccordion: params => ax.get(`listaccordion?offset=0&limit=30`, { params }),

  addAccordion: payload => ax.post(`accordion`, payload),

  updateAccordion: (payload, id) => ax.put(`accordion/${id}`, payload),

  removeAccordion: id => ax.delete(`accordion/${id.accordion_id}`),
};

export const { getAccordion, addAccordion, updateAccordion, removeAccordion } = accordionService;
