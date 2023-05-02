import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserHeaders } from '../../interfaces/headersSlice.interfaces';

const headersSlice = createSlice({
  name: 'headers',
  initialState: {
    value: {} as UserHeaders,
  },
  reducers: {
    updateHeaders: (state, action: PayloadAction<UserHeaders>) => {
      state.value = action.payload;
    },
  },
});

export const { updateHeaders } = headersSlice.actions;
export default headersSlice.reducer;
