import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IEditorInitialState } from '../../interfaces/editorSlice';
import { QueryVariables } from '../../interfaces/headersSlice.interfaces';

const initialState: IEditorInitialState = {
  query: '',
  variables: undefined,
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    updateVariables: (state, action: PayloadAction<QueryVariables>) => {
      state.variables = action.payload;
    },
  },
});

const { actions, reducer } = editorSlice;

export default reducer;
export const { updateQuery, updateVariables } = actions;
