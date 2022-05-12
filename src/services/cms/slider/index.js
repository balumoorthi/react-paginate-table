import ax from '../../index';

const SliderService = {
  getSlider: () => ax.get(`listslider?offset=0&limit=3`),

  addSlider: payload => ax.post(`slider`, payload),

  updateSlider: (payload, id) => ax.put(`slider/${id}`, payload),

  removeSlider: id => ax.delete(`slider/${id.slider_id}`),

};

export const {
  getSlider,
  addSlider,
  updateSlider,
  removeSlider,
} = SliderService;
