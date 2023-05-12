import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthSlice } from '../../interfaces/auth.ts';

const initialState: IAuthSlice = {
  accessToken: '',
  email: '',
  uid: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSignIn: (state, action: PayloadAction<IAuthSlice>) => {
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
    authSignOut: (state) => {
      state.accessToken = '';
      state.email = '';
      state.uid = '';
    },
  },
});

const { actions, reducer } = authSlice;

export default reducer;

export const { authSignIn, authSignOut } = actions;
