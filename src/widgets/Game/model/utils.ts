import { IWord } from 'shared/api/lib/types';
import { getRandomIntInclusive } from 'shared/lib';

export const getWordsForStep = (words: IWord[], index: number, wordsForStepCount = 5) => {
  const newArr = [...words.slice(0, index), ...words.slice(index + 1)];

  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }

  const newIndex = getRandomIntInclusive(0, wordsForStepCount - 1);

  return [
    ...newArr.slice(0, newIndex),
    words[index],
    ...newArr.slice(newIndex + 1, wordsForStepCount),
  ];
};
