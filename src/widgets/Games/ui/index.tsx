// TODO: REFACTOR
import { IWord } from 'shared/api/lib/types';

export const Sprint = ({ words }: { words: IWord[] }) => {
  return (
    <>
      В игре спринт, <pre>{JSON.stringify(words, null, 2)}</pre>
    </>
  );
};

export const Audio = ({ words }: { words: IWord[] }) => {
  return (
    <>
      В игре аудиовызов, <pre>{JSON.stringify(words, null, 2)}</pre>
    </>
  );
};
