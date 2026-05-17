import { i18nInstance } from '@app/localization/i18n';

export const localizationUtil = {
  changeLanguage: (lang: string) => {
    i18nInstance.changeLanguage(lang);
  },
};
