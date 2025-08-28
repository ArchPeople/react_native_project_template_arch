import { SafeAreaView, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'

type ScaffoldProps = {
  children: ReactNode;
}

export const Scaffold = ({ children }: ScaffoldProps) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});