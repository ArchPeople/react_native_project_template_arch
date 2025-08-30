import { StyleSheet, View } from 'react-native';
import React, { memo } from 'react';

export const Spacer: React.FC = memo(() => {
  return <View style={styles.spacer} />;
});

const styles = StyleSheet.create({
  spacer: {
    flex: 1,
  },
});
