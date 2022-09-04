import { IFinalStat } from '../lib/types';
import SoundBtn from './SoundBtn';

type IGameStatProps = {
  isMuted: boolean;
  stat: IFinalStat;
  handleReset: () => void;
};

const GameStat = (props: IGameStatProps) => {
  const {
    stat: { newWordsCount, successCount, successStreak, successWords, failWords },
    isMuted,
    handleReset,
  } = props;

  return (
    <div>
      <div>Количество новых слов: {newWordsCount}</div>
      <div>Правильных ответов: {successCount}</div>
      <div>Правильных ответов подряд: {successStreak}</div>

      <div>
        {successWords.map((w) => (
          <div key={w.id}>
            +
            <SoundBtn word={w} isMuted={isMuted} isAuto={false} />
            {w.word} - {w.wordTranslate}
          </div>
        ))}
      </div>

      <div>
        {failWords.map((w) => (
          <div key={w.id}>
            -
            <SoundBtn word={w} isMuted={isMuted} isAuto={false} />
            {w.word} - {w.wordTranslate}
          </div>
        ))}
      </div>

      <button onClick={handleReset}>Replay</button>
    </div>
  );
};

export default GameStat;
