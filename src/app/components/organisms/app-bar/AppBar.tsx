import { assetColors } from '@app/assets';
import { themeSystemMode } from '@app/themes';
import { ds } from '@core/general-helpers/extensions';
import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

type AppBarProps = {
  title?: string;
  leading?: ReactNode;
  actions?: ReactNode;
  backgroundColor?: string;
  backgroundDarkColor?: string;
  elevation?: number;
};

export const AppBar: React.FC<AppBarProps> = ({
  title,
  leading,
  actions,
  backgroundColor,
  backgroundDarkColor,
  elevation,
}) => {
  const getTitleColor = () => {
    if (themeSystemMode.getSystemMode() == themeSystemMode.light) {
      return assetColors.black;
    } else {
      return assetColors.white;
    }
  };

  const getBackgroundColor = () => {
    {
      if (
        backgroundColor != null &&
        themeSystemMode.getSystemMode() == themeSystemMode.light
      ) {
        return backgroundColor;
      } else if (
        backgroundDarkColor != null &&
        themeSystemMode.getSystemMode() == themeSystemMode.dark
      ) {
        return backgroundDarkColor;
      } else {
        if (themeSystemMode.getSystemMode() == themeSystemMode.light) {
          return assetColors.lightMode;
        } else {
          return assetColors.darkMode;
        }
      }
    }
  };

  return (
    <View
      style={[
        elevation ? styles.elevatedContainer : null,
        {
          backgroundColor: getBackgroundColor(),
        },
      ]}
    >
      <View style={styles.inner}>
        {leading ? <View style={styles.side}>{leading}</View> : null}
        <Text style={[styles.title, { color: getTitleColor() }]}>{title}</Text>
        {actions ? <View style={styles.side}>{actions}</View> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  elevatedContainer: {
    elevation: 4,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  inner: {
    height: ds(56),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ds(16),
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontSize: 18,
  },
  side: {
    width: ds(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
