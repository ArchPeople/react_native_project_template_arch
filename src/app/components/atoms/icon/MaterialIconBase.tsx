import React, { memo } from 'react';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useSystemModeStore } from '@app/global-state';
import { themeSystemMode } from '@app/themes';
import { assetColors } from '@app/assets';
import { ds } from '@core/general-helpers/extensions';
import { GestureResponderEvent } from 'react-native';

type MaterialIconProps = {
  name?: any;
  color?: string;
  darkColor?: string;
  size?: number;
  onPress?: (event: GestureResponderEvent) => void;
};

export const MaterialIconBase: React.FC<MaterialIconProps> = memo(
  ({ name, color, darkColor, size = ds(22), onPress }) => {
    const systemMode = useSystemModeStore(state => state.systemMode);

    const getColor = () => {
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
      <MaterialIcons
        name={name != null ? name : 'favorite'}
        color={color != null ? color : getColor()}
        size={size}
        onPress={onPress}
      />
    );
  },
);
