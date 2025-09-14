import { GestureResponderEvent, Pressable } from 'react-native';
import React, { memo, ReactNode } from 'react';

type PressableBaseProps = {
  accessibilityLabel?: string;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  children?: ReactNode;
};

export const PressableBase: React.FC<PressableBaseProps> = memo(
  ({ accessibilityLabel, onPress, onLongPress, children }) => {
    return (
      <Pressable
        accessibilityLabel={'pressable-' + accessibilityLabel}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        {children}
      </Pressable>
    );
  },
);
