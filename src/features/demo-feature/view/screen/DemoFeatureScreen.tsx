import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AppBar, Scaffold } from '@components/organisms'

const DemoFeatureScreen = () => {
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

export default DemoFeatureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});