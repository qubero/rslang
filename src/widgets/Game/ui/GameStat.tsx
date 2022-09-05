import { Check, Close } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Button, Grow, Tab } from '@mui/material';
import { useState } from 'react';
import { IWord } from 'shared/api/lib/types';
import { IFinalStat } from '../lib/types';
import SoundBtn from './SoundBtn';

type IGameStatProps = {
  isMuted: boolean;
  stat: IFinalStat;
  handleReset: () => void;
};

const TabWord = ({ word, isMuted }: { word: IWord; isMuted: boolean }) => {
  return (
    <div>
      <SoundBtn word={word} isMuted={isMuted} isAuto={false} />
      <span>
        <b>{word.word}</b> - {word.wordTranslate}
      </span>
    </div>
  );
};

const GameStat = (props: IGameStatProps) => {
  const {
    stat: { newWordsCount, successCount, successStreak, successWords, failWords },
    isMuted,
    handleReset,
  } = props;
  const [value, setValue] = useState('1');

  return (
    <Grow in={true} timeout={1000}>
      <Box
        sx={{
          typography: 'body1',
          width: 300,
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: '20px',
        }}
      >
        <div>
          <div>
            Новых слов: <b>{newWordsCount}</b>
          </div>
          <div>
            Правильных ответов: <b>{successCount}</b>
          </div>
          <div>
            Правильных ответов подряд: <b>{successStreak}</b>
          </div>
        </div>

        <div>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
              <TabList onChange={(e, newValue) => setValue(newValue)}>
                <Tab
                  label={
                    <>
                      <Check />
                      <span>Верно</span>
                    </>
                  }
                  value="1"
                  sx={{
                    borderRadius: 1,
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'row',
                    gap: '10px',
                  }}
                />
                <Tab
                  label={
                    <>
                      <Close />
                      <span>Неверно</span>
                    </>
                  }
                  value="2"
                  sx={{
                    borderRadius: 1,
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'row',
                    gap: '10px',
                  }}
                />
              </TabList>
            </Box>

            <TabPanel value="1" sx={{ height: 300, overflowY: 'auto', padding: '10px 0' }}>
              {successWords.length
                ? successWords.map((w) => <TabWord key={w.id} word={w} isMuted={isMuted} />)
                : 'Нет слов'}
            </TabPanel>
            <TabPanel value="2" sx={{ height: 300, overflowY: 'auto', padding: '10px 0' }}>
              {failWords.length
                ? failWords.map((w) => <TabWord key={w.id} word={w} isMuted={isMuted} />)
                : 'Нет слов'}
            </TabPanel>
          </TabContext>
        </div>

        <Button variant="contained" onClick={handleReset}>
          Сыграть еще раз
        </Button>
      </Box>
    </Grow>
  );
};

export default GameStat;
