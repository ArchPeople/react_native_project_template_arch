import { StyleSheet, View } from 'react-native';
import React, { ReactNode } from 'react';
import { assetColors } from '@app/assets';
import { Gap } from '@app/components/atoms';
import { screenSizeUtil } from '@core/general-helpers/utils/screen-size/screnSizeUtil';
import { themeSystemMode } from '@app/themes';

type ScaffoldProps = {
  children: ReactNode;
};

export const Scaffold: React.FC<ScaffoldProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Gap
        height={screenSizeUtil.getStatusBarHeight}
        backgroundColor={
          themeSystemMode.getSystemMode() == themeSystemMode.light
            ? assetColors.lightMode
            : assetColors.darkMode
        }
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
