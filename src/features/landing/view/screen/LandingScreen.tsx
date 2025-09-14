import React, { memo } from 'react';
import { Scaffold } from '@app/components/organisms';
import { LandingIntroductionSection } from '../section/LandingIntroductionSection';

type LandingScreenProps = {};

export const LandingScreen: React.FC<LandingScreenProps> = memo(() => {
  return (
    <Scaffold ignoreAppBarHeight={true}>
      <LandingIntroductionSection />
    </Scaffold>
  );
});
