import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import {
  getAggregatedWordsFilter,
  useAggregatedWords,
  useNonAggregatedWords,
} from 'widgets/UserWords';
import { IGameSettings, MIN_WORDS_FOR_GAME_COUNT } from '../constants';

const useGameSetup = (initSettings: IGameSettings) => {
  const { isAuth } = useAuth();
  const filter = getAggregatedWordsFilter(
    initSettings,
    null,
    initSettings.fromBook !== false ? false : null
  );

  const aggregatedWords = useAggregatedWords({ wordsPerPage: MIN_WORDS_FOR_GAME_COUNT, filter });
  const nonAggregatedWords = useNonAggregatedWords(initSettings);

  return isAuth ? aggregatedWords : nonAggregatedWords;
};

export default useGameSetup;
