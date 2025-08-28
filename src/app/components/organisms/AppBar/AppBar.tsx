import React, { ReactNode } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { StatusBar } from 'react-native';

type AppBarProps = {
  title?: string;
  leading?: ReactNode;
  actions?: ReactNode;
  backgroundColor?: string;
  elevation?: number;
};

const AppBar = ({ title, leading, actions, backgroundColor, elevation }: AppBarProps) => {

  return (
    <View style={[elevation ? styles.elevatedContainer : null, { backgroundColor: backgroundColor ? backgroundColor : 'white' }]}>
      <View style={styles.inner}>
        {leading ? <View style={styles.side}>{leading}</View> : null}
        <Text style={styles.title}>{title}</Text>
        {actions ? <View style={styles.side}>{actions}</View> : null}
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  elevatedContainer: {
    elevation: 4,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  inner: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    color: 'black',
    fontSize: 18,
  },
  side: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
