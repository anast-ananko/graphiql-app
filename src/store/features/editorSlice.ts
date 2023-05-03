import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IEditorInitialState {
  query: string;
}
const initialState: IEditorInitialState = {
  query: '',
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

const { actions, reducer } = editorSlice;

export default reducer;
export const { updateQuery } = actions;
