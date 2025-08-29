import { View } from 'react-native';
import React from 'react';

type GapProps = {
  height?: number;
  width?: number;
  backgroundColor?: string;
};

export const Gap = ({ height, width, backgroundColor }: GapProps) => {
  return (
    <View
      style={[
        { height: height, width: width, backgroundColor: backgroundColor },
      ]}
    />
  );
};
