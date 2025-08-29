import { StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScaffoldProps = {
  children: ReactNode;
};

export const Scaffold = ({ children }: ScaffoldProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
