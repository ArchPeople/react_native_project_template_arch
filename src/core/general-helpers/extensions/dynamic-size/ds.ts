import { themeDeviceDimension } from '@app/themes';
import { screenSizeUtil } from '@core/general-helpers/utils';

export const ds = (val: number) => {
  let width: number = screenSizeUtil.getScreenWidth;
  let scale: number = width / themeDeviceDimension.defaultScreenWidth;
  return val * scale;
};
