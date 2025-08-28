import { SafeAreaView, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'

type ScaffoldProps = {
  children: ReactNode;
}

const Scaffold = ({ children }: ScaffoldProps) => {
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

export default Scaffold;