import { ds } from '@core/general-helpers/extensions';

export const themeShadow = {
  get smallShadow() {
    return {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: ds(1) },
      shadowOpacity: 0.3,
      shadowRadius: ds(3),
      elevation: 2,
    };
  },

  get mediumShadow() {
    return {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: ds(4) },
      shadowOpacity: 0.3,
      shadowRadius: ds(12),
      elevation: 6,
    };
  },

  get largeShadow() {
    return {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: ds(5) },
      shadowOpacity: 0.3,
      shadowRadius: ds(12),
      elevation: 8,
    };
  },
};
