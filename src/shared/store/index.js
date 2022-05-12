import { configureStore } from '@reduxjs/toolkit';

import appReducer from 'shared/store/reducers/app';

import modalReducer from 'shared/store/reducers/modal';

import editorReducer from 'shared/store/reducers/editor';

import optionsToolReducer from 'shared/store/reducers/options-tool';

import dropdownReducer from 'shared/store/reducers/dropdowns';

export default configureStore({
  reducer: {
    components: editorReducer,
    app: appReducer,
    modal: modalReducer,
    optionsTool: optionsToolReducer,
    dropdowns: dropdownReducer,
  },
});
