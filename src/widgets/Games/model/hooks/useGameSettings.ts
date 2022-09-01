import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { IGameSettings, INITIAL_GAME_SETTINGS } from '../constants';

const useGameSettings = () => {
  const { state } = useLocation();

  const getSettingsByLocation = useCallback((): IGameSettings => {
    return INITIAL_GAME_SETTINGS;
  }, []);

  const getSettings = useCallback((): IGameSettings => {
    return (state as IGameSettings) || INITIAL_GAME_SETTINGS;
  }, [state]);

  return { getSettings, getSettingsByLocation };
};

export default useGameSettings;
