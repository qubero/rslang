import { useLayoutEffect, useState } from 'react';
import { getRandomIntInclusive } from 'shared/lib';
import { PAGE_PER_GROUP_COUNT } from '../constants';
import useGameSettings from './useGameSettings';

const useGameInit = () => {
  const { getSettings } = useGameSettings();

  const [settings, setSettings] = useState(getSettings());
  const [isStart, setIsStart] = useState(false);

  const handleStart = () => setIsStart(true);
  const handleReset = () => setIsStart(false);

  const handleGroupChange = (newGroup: number) => {
    const newPage = getRandomIntInclusive(0, PAGE_PER_GROUP_COUNT);
    const newSettings = { group: newGroup, page: newPage };

    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  useLayoutEffect(() => {
    setSettings(getSettings());

    return () => {
      setIsStart(false);
    };
  }, [getSettings]);

  return {
    settings,
    isStart,
    handleStart,
    handleReset,
    handleGroupChange,
  };
};

export default useGameInit;
