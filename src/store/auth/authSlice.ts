import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User as FirebaseUser } from 'firebase/auth';

type IAuthSlice = {
  user: FirebaseUser | null;
};

const initialState: IAuthSlice = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<FirebaseUser | null>) => {
      state.user = action.payload;
    },
    signOutR: (state) => {
      state.user = null;
    },
  },
});

const { actions, reducer } = authSlice;

export default reducer;

export const { signIn, signOutR } = actions;
