import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AppBar, Scaffold } from '@app/components/organisms';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/store/store';
import { setTitle } from '@features/demo-feature/reducer/demoSlice';

const DemoFeatureScreen = () => {
  const title = useSelector((state: RootState) => state.demo.title);
  const dispatch = useDispatch();

  return (
    <Scaffold>
      <AppBar title="Demo Feature" />
      <View style={styles.container}>
        <Text>{title}</Text>
        <Button
          title="Change title"
          onPress={() => {
            dispatch(setTitle());
          }}
        ></Button>
      </View>
    </Scaffold>
  );
};

export default DemoFeatureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 16,
  },
});
