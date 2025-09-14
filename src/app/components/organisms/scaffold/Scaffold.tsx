import { StyleSheet, View } from 'react-native';
import React, { ReactNode } from 'react';
import { assetColors } from '@app/assets';
import { Gap } from '@app/components/atoms';
import { screenSizeUtil } from '@core/general-helpers/utils/screen-size/screnSizeUtil';
import { themeSystemMode } from '@app/themes';
import { useSystemMode } from '@core/hooks';

type ScaffoldProps = {
  ignoreAppBarHeight?: boolean;
  children: ReactNode;
};

export const Scaffold: React.FC<ScaffoldProps> = ({
  ignoreAppBarHeight = false,
  children,
}) => {
  const { systemMode } = useSystemMode();
  return (
    <View style={styles.container}>
      {ignoreAppBarHeight ? (
        <View />
      ) : (
        <Gap
          height={screenSizeUtil.getStatusBarHeight}
          backgroundColor={
            systemMode == themeSystemMode.light
              ? assetColors.lightMode
              : assetColors.darkMode
          }
        />
      )}

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
