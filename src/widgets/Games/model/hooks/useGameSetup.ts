import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import { useAggregatedWords, useNonAggregatedWords } from 'widgets/UserWords';
import { IGameSettings, MIN_WORDS_FOR_GAME_COUNT } from '../constants';

const useGameSetup = (initSettings: IGameSettings) => {
  const { isAuth } = useAuth();
  const aggregatedWords = useAggregatedWords({
    group: initSettings.group,
    page: initSettings.page,
    wordsPerPage: MIN_WORDS_FOR_GAME_COUNT,
    filter:
      '{"$or":[{"userWord.difficulty":"medium"},{"userWord.difficulty":"hard"},{"userWord":null}]}',
  });
  const nonAggregatedWords = useNonAggregatedWords(initSettings);

  return isAuth ? aggregatedWords : nonAggregatedWords;
};

export default useGameSetup;
