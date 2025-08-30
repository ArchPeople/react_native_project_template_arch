import { themeDeviceDimension } from '@app/themes';
import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const screenSizeUtil = {
  get getScreenWidth() {
    const { width } = Dimensions.get('window');
    return width;
  },
  get getScreenHeight() {
    const { height } = Dimensions.get('window');
    return height;
  },
  get getStatusBarHeight() {
    const insets = useSafeAreaInsets();
    return insets.top;
  },
  get getBottomBarHeight() {
    const insets = useSafeAreaInsets();
    return insets.bottom;
  },
  get isTablet() {
    return this.getScreenWidth >= themeDeviceDimension.tabletScreenWidth;
  },
};
