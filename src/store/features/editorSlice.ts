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

const { updateQuery, updateVariablesString } = editorSlice.actions;

const selectQuery = (state: RootState) => {
  return state.editorReducer.query;
};

const selectVariablesString = (state: RootState) => {
  return state.editorReducer.variablesString;
};

export { updateQuery, updateVariablesString, selectQuery, selectVariablesString };

export default editorSlice.reducer;
