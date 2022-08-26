import { Fragment } from 'react';

import Intro from 'widgets/Intro';
import OurApplication from 'widgets/OurApplication';
import OurAbility from 'widgets/OurAbility';
import OurTeam from 'widgets/OurTeam';
import { useGetWordsQuery } from 'shared/api';

const MainPage = () => {
  //Ержан, вставай заебал на работу пора
  const {} = useGetWordsQuery({ page: 0, group: 0 });

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
