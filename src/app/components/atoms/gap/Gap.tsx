import { View } from 'react-native';
import React, { memo } from 'react';

type GapProps = {
  height?: number;
  width?: number;
  backgroundColor?: string;
};

export const Gap: React.FC<GapProps> = memo(
  ({ height, width, backgroundColor }) => {
    return (
      <View
        style={[
          { height: height, width: width, backgroundColor: backgroundColor },
        ]}
      />
    );
  },
);
