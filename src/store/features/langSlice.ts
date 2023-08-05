import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ILang } from '../../interfaces/langSlice';
import { RootState } from '..';

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
      if (action.payload === 'en' || action.payload === 'by' || action.payload === 'ru') {
        state.lang = action.payload;
      }
      setToLocalStorage(state);
    },
  },
});

const { changeLanguage } = langSlice.actions;

const selectLang = (state: RootState) => {
  return state.langReducer.lang;
};

export { changeLanguage, selectLang };

export default langSlice.reducer;
