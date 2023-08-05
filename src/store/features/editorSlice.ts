import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserHeaders } from '../../interfaces/headersSlice.interfaces';
import { IEditorInitialState } from '../../interfaces/editorSlice';
import { RootState } from '..';

const initialState: IEditorInitialState = {
  query: '',
  variablesString: '',
  headersObject: {},
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    updateVariablesString: (state, action: PayloadAction<string>) => {
      state.variablesString = action.payload;
    },
    updateHeadersObject: (state, action: PayloadAction<UserHeaders>) => {
      state.headersObject = action.payload;
    },
  },
});

const { updateQuery, updateVariablesString, updateHeadersObject } = editorSlice.actions;

const selectQuery = (state: RootState) => {
  return state.editorReducer.query;
};

const selectVariablesString = (state: RootState) => {
  return state.editorReducer.variablesString;
};

const selectHeadersObject = (state: RootState) => {
  return state.editorReducer.headersObject;
};

export {
  updateQuery,
  updateVariablesString,
  updateHeadersObject,
  selectQuery,
  selectVariablesString,
  selectHeadersObject,
};

export default editorSlice.reducer;
