import Intro from 'widgets/Intro';
import OurApplication from 'widgets/OurApplication';
import OurAbility from 'widgets/OurAbility';
import OurTeam from 'widgets/OurTeam';
import { Wrapper } from 'shared/ui/Wrapper';
import { useInitialLoading } from './model/hooks/useInitialLoading';

const MainPage = () => {
  useInitialLoading();

  return (
    <Wrapper>
      <Intro />
      <OurAbility />
      <OurApplication />
      <OurTeam />
    </Wrapper>
  );
};

export default MainPage;
