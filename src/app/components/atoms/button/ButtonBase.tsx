import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';
import React, { memo, use, useState } from 'react';
import { assetColors } from '@app/assets';
import { themeSystemMode } from '@app/themes';
import { ds } from '@core/general-helpers/extensions';
import { TextBase } from '@app/components/atoms';

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

    const getLabelColor = () => {
      if (disabled) {
        return assetColors.grey;
      } else {
        if (
          labelColor != null &&
          themeSystemMode.getSystemMode() == themeSystemMode.light
        ) {
          return labelColor;
        } else if (
          labelDarkColor != null &&
          themeSystemMode.getSystemMode() == themeSystemMode.dark
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
        <TextBase style={[labelStyle]} color={getLabelColor()} size={ds(16)}>
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
