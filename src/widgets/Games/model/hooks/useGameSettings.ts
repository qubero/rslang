import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { IGameSettings, INITIAL_GAME_SETTINGS } from '../constants';

const useGameSettings = () => {
  const { state, pathname } = useLocation();

  const getSettingsByLocation = useCallback((): IGameSettings => {
    if (pathname === '/book') {
      // TODO: get values from url params
      return { group: 0, page: 0, fromBook: true };
    }

    return INITIAL_GAME_SETTINGS;
  }, [pathname]);

  const getSettings = useCallback((): IGameSettings => {
    return (state as IGameSettings) || INITIAL_GAME_SETTINGS;
  }, [state]);

  return { getSettings, getSettingsByLocation };
};

export default useGameSettings;
