import { Appearance } from 'react-native';

export const themeSystemMode = {
  light: 'light',
  dark: 'dark',
  getSystemMode: () => {
    return Appearance.getColorScheme();
  },
};
