/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const optionsToolSlice = createSlice({
  name: 'optionTool',
  initialState: {
    selectedComponent: '',
    componentInfo: '',
  },
  reducers: {
    setComponent: (state, action) => {
      if (action.payload) {
        state.selectedComponent = action.payload;
        state.componentInfo = {
          id: action.payload.dataset.id,
          name: action.payload.dataset.componentName,
          label: action.payload.dataset.componentName.toLowerCase(),
        };
      } else {
        state.selectedComponent = '';
        state.componentInfo = '';
      }
    },
  },
});

export const { setComponent } = optionsToolSlice.actions;

export default optionsToolSlice.reducer;
