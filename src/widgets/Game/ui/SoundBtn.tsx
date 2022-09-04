import { memo, useEffect, useMemo, useRef } from 'react';
import { Howl } from 'howler';
import { Fab } from '@mui/material';
import { API_URL } from 'shared/api/model/constants';
import { IWord } from 'shared/api/lib/types';

type ISoundBtnProps = { word: IWord; isMuted: boolean; isAuto?: boolean };

const SoundBtn = ({ word, isMuted, isAuto = true }: ISoundBtnProps) => {
  const { id, audio: srcAudio } = word;
  const isMutedRef = useRef(false);

  const audio = useMemo(
    () =>
      new Howl({
        src: [`${API_URL}${srcAudio}`],
        mute: isMuted,
      }),
    [srcAudio, isMuted]
  );

  useEffect(() => {
    if (isMutedRef.current !== isMuted) {
      isMutedRef.current = isMuted;
      return;
    }

    if (isAuto) audio.play();

    return () => {
      audio.stop();
    };
  }, [audio, id, isMuted, isAuto]);

  return (
    <Fab
      sx={{
        color: `red`,
        p: '5px',
        width: '45px',
        height: '45px',
        backgroundColor: 'white',
      }}
      onClick={() => {
        audio.stop();
        audio.play();
      }}
    >
      repeat
    </Fab>
  );
};

export default memo(SoundBtn);
