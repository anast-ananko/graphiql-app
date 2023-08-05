import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserHeaders, UserHeadersInitialState } from '../../interfaces/headersSlice.interfaces';
import { RootState } from '..';

const initialUserHeadersState: UserHeadersInitialState = {
  value: {},
};

const headersSlice = createSlice({
  name: 'headers',
  initialState: initialUserHeadersState,
  reducers: {
    updateHeaders: (state, action: PayloadAction<UserHeaders>) => {
      state.value = action.payload;
    },
  },
});

const { updateHeaders } = headersSlice.actions;

const selectHeaders = (state: RootState) => {
  return state.userHeaders.value;
};

export { updateHeaders, selectHeaders };

export default headersSlice.reducer;
