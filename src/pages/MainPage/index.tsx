import { Fragment } from 'react';

import Intro from 'widgets/Intro';
import OurApplication from 'widgets/OurApplication';
import OurAbility from 'widgets/OurAbility';
import OurTeam from 'widgets/OurTeam';
import { useGetUserWordsQuery, useGetWordsQuery } from 'shared/api';
import { getAggregatedWordsFilter, useAggregatedWords } from 'widgets/UserWords';
import { MIN_WORDS_FOR_GAME_COUNT } from 'widgets/Games';
import useAuth from 'widgets/Authorization/model/hooks/useAuth';

const MainPage = () => {
  const { auth, isAuth } = useAuth();
  const params = { page: 0, group: 0 };
  const filter = getAggregatedWordsFilter(params);
  const filterParams = { wordsPerPage: MIN_WORDS_FOR_GAME_COUNT, filter };

  const {} = useAggregatedWords(filterParams);
  const {} = useGetWordsQuery(params, { skip: isAuth });
  const {} = useGetUserWordsQuery(auth, { skip: !isAuth });

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
