import { themeSystemMode } from '@app/themes';

export const assetColors = {
  white: '#FFFFFF',
  black: '#000000',
  grey: '#808080',
  lightGrey: '#B0B0B0',
  blue: '#2196F3',
  red: '#F44336',
  green: '#4CAF50',
  yellow: '#FFEB3B',
  orange: '#FF9800',
  purple: '#9C27B0',
  lightMode: '#FFFFFF',
  darkMode: '#121212',
  get systemMode() {
    return themeSystemMode.getSystemMode() === themeSystemMode.light
      ? this.lightMode
      : this.darkMode;
  },
};
