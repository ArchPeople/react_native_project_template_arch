import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from './languages/en.json';
import fr from './languages/fr.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
};

const bestLanguage = RNLocalize.findBestLanguageTag(Object.keys(resources));

i18n.use(initReactI18next).init({
  resources,
  lng: bestLanguage?.languageTag || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export const i18nInstance = i18n;
