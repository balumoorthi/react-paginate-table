/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isSidebarOpen: window.screen.width > 767,
    breadcrumb: [],
    selectedProject: {},
  },
  reducers: {
    openSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    breadcrumb: (state, action) => {
      state.breadcrumb = action.payload;
    },
    selectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
  },
});

export const { openSidebar, breadcrumb, selectedProject } = appSlice.actions;

export default appSlice.reducer;
