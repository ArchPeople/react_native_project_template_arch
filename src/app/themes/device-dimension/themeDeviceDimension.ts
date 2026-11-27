import { screenSizeUtil } from '@core/general-helpers/utils/screen-size/screnSizeUtil';

export const themeDeviceDimension = {
  // Screen dimensions imitations (Add more if needed)
  phoneScreenWidth: 360.0,
  phoneScreenHeight: 640.0,
  tabletScreenWidth: 600.0,
  tabletScreenHeight: 1000.0,

  get deviceWidth() {
    return screenSizeUtil.isTablet
      ? this.tabletScreenWidth
      : this.phoneScreenWidth;
  },
};
