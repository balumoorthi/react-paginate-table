import { createSlice } from '@reduxjs/toolkit';

export const dropDowns = createSlice({
  name: 'dropdowns',
  initialState: {},
  reducers: {
    dropdowns: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { dropdowns } = dropDowns.actions;

export default dropDowns.reducer;
