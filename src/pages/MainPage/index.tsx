import { Fragment } from 'react';

import Intro from 'widgets/Intro';
import OurApplication from 'widgets/OurApplication';
import OurAbility from 'widgets/OurAbility';
import OurTeam from 'widgets/OurTeam';
import { useInitialLoading } from './model/hooks/useInitialLoading';

const MainPage = () => {
  useInitialLoading();

  return (
    <Fragment>
      <Intro />
      <OurAbility />
      <OurApplication />
      <OurTeam />
    </Fragment>
  );
};

export default MainPage;
