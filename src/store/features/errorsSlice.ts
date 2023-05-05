import { createSlice } from '@reduxjs/toolkit';

import { AddErrorAction, ErrorsState } from '../../interfaces/errorsSlice.interfaces';
import { RootState } from '..';

const initialErrorsState: ErrorsState = {
  value: [],
};

const errorsSlice = createSlice({
  name: 'error',
  initialState: initialErrorsState,
  reducers: {
    addError: (state, action: AddErrorAction) => {
      state.value.push(action.payload);
    },
    clearErrors: (state) => {
      state.value = [];
    },
  },
});

const { addError, clearErrors } = errorsSlice.actions;

const selectErrorsArray = (state: RootState) => {
  return state.userErrors.value;
};

export { errorsSlice, selectErrorsArray, addError, clearErrors };

export default errorsSlice.reducer;
