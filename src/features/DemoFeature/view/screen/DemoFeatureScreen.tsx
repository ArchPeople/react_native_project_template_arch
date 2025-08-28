import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AppBar, Scaffold } from '@components/organisms'

export default function DemoFeatureScreen() {
  return (
    <Scaffold>
      <AppBar
        title='Demo Feature'
      />
      <View style={styles.container}>

      </View>
    </Scaffold>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})