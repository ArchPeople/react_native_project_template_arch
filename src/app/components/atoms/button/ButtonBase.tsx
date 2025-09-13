import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  TextStyle,
} from 'react-native';
import React, { memo, useState } from 'react';
import { assetColors } from '@app/assets';
import { themeFonts, themeSystemMode } from '@app/themes';
import { ds } from '@core/general-helpers/extensions';
import { TextBase } from '@app/components/atoms';
import { useSystemMode } from '@core/hooks';

type ButtonBaseProps = {
  accessibilityLabel?: string;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  backgroundDarkColor?: string;
  label?: string;
  labelColor?: string;
  labelDarkColor?: string;
  labelStyle?: TextStyle;
  width?: number;
  height?: number;
  disabled?: boolean;
};

export const ButtonBase: React.FC<ButtonBaseProps> = memo(
  ({
    accessibilityLabel,
    onPress,
    onLongPress,
    backgroundColor,
    backgroundDarkColor,
    label,
    labelColor,
    labelDarkColor,
    labelStyle,
    width,
    height = ds(40),
    disabled = false,
  }) => {
    const [onPressed, setOnPressed] = useState(false);
    const { systemMode } = useSystemMode();

    const getLabelColor = () => {
      if (disabled) {
        return assetColors.grey;
      } else {
        if (labelColor != null && systemMode == themeSystemMode.light) {
          return labelColor;
        } else if (
          labelDarkColor != null &&
          systemMode == themeSystemMode.dark
        ) {
          return labelDarkColor;
        } else {
          return assetColors.white;
        }
      }
    };

    const getBackgroundColor = () => {
      if (disabled) {
        return assetColors.lightGrey;
      } else {
        if (backgroundColor != null && systemMode == themeSystemMode.light) {
          return backgroundColor;
        } else if (
          backgroundDarkColor != null &&
          systemMode == themeSystemMode.dark
        ) {
          return backgroundDarkColor;
        } else {
          if (systemMode == themeSystemMode.light) {
            return assetColors.blue;
          } else {
            return assetColors.purple;
          }
        }
      }
    };

    return (
      <Pressable
        accessibilityLabel={'button-' + accessibilityLabel}
        onPress={onPress}
        onLongPress={onLongPress}
        onPressIn={() => {
          setOnPressed(true);
        }}
        onPressOut={() => {
          setOnPressed(false);
        }}
        style={[
          styles.button,
          {
            backgroundColor: getBackgroundColor(),
            height: height,
            width: width,
            opacity: onPressed ? 0.9 : 1,
          },
        ]}
      >
        <TextBase
          style={[labelStyle, themeFonts.bodyMdRegular]}
          color={getLabelColor()}
        >
          {label}
        </TextBase>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ds(100),
  },
});
