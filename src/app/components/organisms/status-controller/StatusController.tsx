import { GestureResponderEvent, StyleSheet, View } from 'react-native';
import React from 'react';
import { ActionPanel } from '@app/components/molecules';
import { themeBorder, themePadding } from '@app/themes';
import { assetColors } from '@app/assets';
import { ds } from '@core/general-helpers/extensions';
import { Gap } from '@app/components/atoms';

type StatusControllerProps = {
  title?: string;
  buttonLabel?: string;
  onPressed?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  statusColor?: string;
};

export const StatusController: React.FC<StatusControllerProps> = ({
  title,
  buttonLabel,
  onPressed,
  disabled,
  statusColor,
}) => {
  return (
    <View style={styles.main}>
      <View
        style={{
          ...themeBorder.bc4,
          backgroundColor: statusColor,
          height: ds(40),
        }}
      />
      <Gap height={ds(20)} />
      <ActionPanel
        title={title}
        buttonLabel={buttonLabel}
        onPressed={onPressed}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    ...themePadding.pa16,
    ...themeBorder.bc8,
    borderWidth: 1,
    borderColor: assetColors.grey,
  },
});
