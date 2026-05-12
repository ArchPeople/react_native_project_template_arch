import { assetColors } from '@app/assets';
import { MaterialIconBase, TextBase } from '@app/components/atoms';
import {
  themeFonts,
  themePadding,
  themeShadow,
  themeSystemMode,
} from '@app/themes';
import { ds } from '@core/general-helpers/extensions';
import { useSystemMode } from '@core/hooks';
import React, { memo, ReactNode } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type AppBarProps = {
  title?: string;
  leading?: ReactNode;
  actions?: ReactNode;
  backgroundColor?: string;
  backgroundDarkColor?: string;
  elevation?: number;
};

export const AppBar: React.FC<AppBarProps> = memo(
  ({
    title,
    leading,
    actions,
    backgroundColor,
    backgroundDarkColor,
    elevation,
  }) => {
    const navigation = useNavigation();
    const { systemMode } = useSystemMode();

    const getTitleColor = () => {
      if (systemMode == themeSystemMode.light) {
        return assetColors.black;
      } else {
        return assetColors.white;
      }
    };

    const getBackgroundColor = () => {
      {
        if (backgroundColor != null && systemMode == themeSystemMode.light) {
          return backgroundColor;
        } else if (
          backgroundDarkColor != null &&
          systemMode == themeSystemMode.dark
        ) {
          return backgroundDarkColor;
        } else {
          if (systemMode == themeSystemMode.light) {
            return assetColors.lightMode;
          } else {
            return assetColors.darkMode;
          }
        }
      }
    };

    const getArrowBackColor = () => {
      {
        if (systemMode == themeSystemMode.light) {
          return assetColors.black;
        } else {
          return assetColors.white;
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
          {leading ? (
            <View style={styles.side}>{leading}</View>
          ) : (
            <View style={styles.arrowBackContainer}>
              <MaterialIconBase
                name={Platform.OS === 'ios' ? 'arrow-back-ios' : 'arrow-back'}
                onPress={() => {
                  navigation.canGoBack() && navigation.goBack();
                }}
              />
            </View>
          )}
          <TextBase style={[styles.title, { color: getTitleColor() }]}>
            {title}
          </TextBase>
          {actions ? <View style={styles.side}>{actions}</View> : null}
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  elevatedContainer: {
    ...themeShadow.mediumShadow,
  },
  inner: {
    ...themePadding.ph16,
    height: ds(56),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...themeFonts.bodyMdRegular,
    flex: 1,
  },
  side: {
    width: ds(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowBackContainer: {
    ...themePadding.pr20,
  },
});
