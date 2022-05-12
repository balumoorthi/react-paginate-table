/* eslint-disable no-param-reassign */
import { createSlice, 
  // current 
} from '@reduxjs/toolkit';

import without from 'lodash/without';

export const componentSlice = createSlice({
  name: 'component',
  initialState: {
    components: {
      root: {
        id: 'root',
        children: [],
      },
    },
  },
  reducers: {
    addComponent: (state, action) => {
      const { id, parent } = action.payload;
      state.components[id] = action.payload;
      state.components[parent].children.push(id);
      // console.log(current(state));
    },
    updateComponent: (state, action) => {
      const { id, props } = action.payload;
      state.components[id].props = props;
      // console.log(current(state));
    },
    removeComponent: (state, action) => {
      const { id, prarentId } = action.payload;
      without(state.components[prarentId].children, id);
      // console.log(current(state));
    },
  },
});

export const { addComponent, updateComponent, removeComponent } =
  componentSlice.actions;

export default componentSlice.reducer;
