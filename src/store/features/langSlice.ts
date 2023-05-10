import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILang } from '../../interfaces/langSlice';

const initialLangState: ILang = {
  lang: localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')!).lang : 'en',
};

const setToLocalStorage = (state: ILang) => {
  const newStorage = Object.assign({}, state) as ILang;

  localStorage.lang = JSON.stringify(newStorage);
};

const langSlice = createSlice({
  name: 'lang',
  initialState: initialLangState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
      setToLocalStorage(state);
    },
  },
});

export const { changeLanguage } = langSlice.actions;
export default langSlice.reducer;
