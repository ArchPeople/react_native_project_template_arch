import { StyleSheet, View } from 'react-native';
import React, { ReactNode } from 'react';
import { assetColors } from '@app/assets';
import { useSystemModeStore } from '@app/global-state';
import { Gap } from '@app/components/atoms';
import { themeSystemMode } from '@app/themes';
import { screenSizeUtil } from '@core/general-helpers/utils';

type ScaffoldProps = {
  ignoreAppBarHeight?: boolean;
  children: ReactNode;
};

export const Scaffold: React.FC<ScaffoldProps> = ({
  ignoreAppBarHeight = false,
  children,
}) => {
  const systemMode = useSystemModeStore(state => state.systemMode);
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
