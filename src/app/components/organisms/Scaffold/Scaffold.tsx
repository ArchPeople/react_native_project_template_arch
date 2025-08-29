import { StyleSheet, View } from 'react-native';
import React, { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { assetColors } from '@app/assets';
import { Gap } from '@app/components/atoms';

type ScaffoldProps = {
  children: ReactNode;
};

export const Scaffold: React.FC<ScaffoldProps> = ({ children }) => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  return (
    <View style={styles.container}>
      <Gap height={statusBarHeight} backgroundColor={assetColors.white} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
