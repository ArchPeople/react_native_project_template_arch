import { GestureResponderEvent, StyleSheet, View } from 'react-native';
import React from 'react';
import { ButtonBase, Spacer, TextBase } from '@app/components/atoms';
import { ds } from '@core/general-helpers/extensions';

type ActionPanelProps = {
  title?: string;
  buttonLabel?: string;
  onPressed?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
};

export const ActionPanel: React.FC<ActionPanelProps> = ({
  title,
  buttonLabel,
  onPressed,
  disabled,
}) => {
  return (
    <View style={styles.main}>
      <TextBase>{title}</TextBase>
      <Spacer />
      <ButtonBase
        label={buttonLabel}
        width={ds(100)}
        onPress={onPressed}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
