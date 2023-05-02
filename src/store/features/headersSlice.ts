import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserHeaders } from '../../interfaces/headersSlice.interfaces';

interface UserHeadersInitialState {
  value: UserHeaders;
}
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

export const { updateHeaders } = headersSlice.actions;
export default headersSlice.reducer;
