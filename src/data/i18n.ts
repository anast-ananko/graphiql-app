import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import dataEn from './dataLangEn.json';
import dataRu from './dataLangRu.json';
import dataBy from './dataLangBy.json';

const resources = {
  en: {
    dataLang: dataEn,
  },
  by: {
    dataLang: dataBy,
  },
  ru: {
    dataLang: dataRu,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')!).lang : 'en',
  fallbackLng: 'en',
  keySeparator: '.',
  ns: ['dataLang'],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
