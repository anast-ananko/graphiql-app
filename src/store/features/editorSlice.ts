import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IEditorInitialState } from '../../interfaces/editorSlice';
import { RootState } from '..';

const initialState: IEditorInitialState = {
  query: '',
  variablesString: '',
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
  },
});

const { actions, reducer } = editorSlice;

const selectQuery = (state: RootState) => {
  return state.editorReducer.query;
};

const { updateQuery, updateVariablesString } = actions;

export { updateQuery, updateVariablesString, selectQuery };
export default reducer;
