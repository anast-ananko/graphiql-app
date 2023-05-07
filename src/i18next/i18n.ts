import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import dashboardEn from '../data/dataLangEn.json';
import dashboardRu from '../data/dataLangRu.json';

const resources = {
  en: {
    dataLang: dashboardEn,
  },
  ru: {
    dataLang: dashboardRu,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')!).lang : 'en',
  fallbackLng: 'en',
  keySeparator: '.',
  ns: ['dataLang'],
});

export default i18n;
