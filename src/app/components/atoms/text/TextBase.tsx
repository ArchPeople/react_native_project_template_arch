import { Text } from 'react-native';
import React, { memo, ReactNode } from 'react';
import { themeFonts, themeSystemMode } from '@app/themes';
import { assetColors } from '@app/assets';
import { useSystemModeStore } from '@app/global-state';

type TextBaseProps = {
  accessibilityLabel?: string;
  style?: any;
  color?: string;
  darkColor?: string;
  children?: ReactNode;
};

export const TextBase: React.FC<TextBaseProps> = memo(
  ({ accessibilityLabel, style, color, darkColor, children }) => {
    const systemMode = useSystemModeStore(state => state.systemMode);
    const getTextColor = () => {
      if (color != null && systemMode == themeSystemMode.light) {
        return color;
      } else if (darkColor != null && systemMode == themeSystemMode.dark) {
        return darkColor;
      } else {
        if (systemMode == themeSystemMode.light) {
          return assetColors.black;
        } else {
          return assetColors.white;
        }
      }
    };

    return (
      <Text
        accessibilityLabel={'text-' + accessibilityLabel}
        style={[style ?? themeFonts.defaultTextBase, { color: getTextColor() }]}
      >
        {children}
      </Text>
    );
  },
);
