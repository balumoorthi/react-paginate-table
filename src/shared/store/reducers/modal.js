import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    title: 'ModalPopup',
    visible: false,
  },
  reducers: {
    toggle: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.visible = action.payload;
    },
    custom: (state, action) => ({ ...action.payload }),
  },
});

export const { toggle, custom } = modalSlice.actions;

export default modalSlice.reducer;
