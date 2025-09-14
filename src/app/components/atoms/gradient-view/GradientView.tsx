import React, { memo, PropsWithChildren, ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

type GradientViewProps = PropsWithChildren<{
  colors: string[];
  style?: StyleProp<ViewStyle>;
  start?: LinearGradientProps['start'];
  end?: LinearGradientProps['end'];
  children?: ReactNode;
}>;

export const GradientView: React.FC<GradientViewProps> = memo(
  ({ colors, style, start, end, children }) => {
    return (
      <LinearGradient colors={colors} start={start} end={end} style={style}>
        {children}
      </LinearGradient>
    );
  },
);
