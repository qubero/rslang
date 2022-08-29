// TODO: REFACTOR
import { IWord } from 'shared/api/lib/types';
import { useUserWord } from 'widgets/UserWords';

const UserWord = ({ word }: { word: IWord }) => {
  const { markAsLearned, markAsDifficult, handleSuccess, handleDelete } = useUserWord(word.id);

  return (
    <div>
      {JSON.stringify(word.word, null, 2)}
      <button onClick={markAsLearned}>изученное</button>
      <button onClick={markAsDifficult}>сложное</button>
      <button onClick={handleSuccess}>+1 в игре</button>
      <button onClick={handleDelete}>удалить</button>
    </div>
  );
};

export const Sprint = ({ words }: { words: IWord[] }) => {
  return (
    <>
      В игре спринт
      <br />
      {words &&
        words.map((word) => (
          <div key={word.id}>
            <UserWord word={word} />
          </div>
        ))}
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
