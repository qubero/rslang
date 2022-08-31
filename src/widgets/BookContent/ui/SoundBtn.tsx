import { Dispatch, memo, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { Howl } from 'howler';
import { PlayArrow, Stop } from '@mui/icons-material';
import { Fab } from '@mui/material';
import { API_URL } from 'shared/api/model/constants';
import { themeColor } from 'widgets/BookHeader/lib/styles';
import { useQueryParams } from 'widgets/BookHeader/model/hooks/useQuery';

type SoundBtnProps = {
  id: string;
  userId: string;
  srcAudio: string;
  srcMeaning: string;
  srcExample: string;
  setUserId: Dispatch<SetStateAction<string>>;
};

const SoundBtn = (props: SoundBtnProps) => {
  const { group } = useQueryParams();
  const { srcAudio, srcMeaning, srcExample, setUserId, id, userId } = props;
  const meaning = useMemo(() => new Howl({ src: [`${API_URL}${srcExample}`] }), [srcExample]);
  const example = useMemo(
    () => new Howl({ src: [`${API_URL}${srcMeaning}`], onend: () => meaning.play() }),
    [meaning, srcMeaning]
  );
  const audio = useMemo(
    () => new Howl({ src: [`${API_URL}${srcAudio}`], onend: () => example.play() }),
    [example, srcAudio]
  );
  const [playing, setPlaying] = useState(false);
  const playAudio = useCallback(() => {
    setPlaying(!playing);
    setUserId(id);
  }, [id, playing, setUserId]);
  const stopAudio = useCallback(() => {
    audio.stop();
    meaning.stop();
    example.stop();
  }, [audio, example, meaning]);

  useEffect(() => {
    if (playing) audio.play();
    else stopAudio();
    if (id !== userId) {
      stopAudio();
      setPlaying(false);
    }
    return () => stopAudio();
  }, [playing, audio, stopAudio, id, userId]);

  return (
    <Fab
      sx={{
        color: `#${themeColor[Number(group)]}`,
        p: '5px',
        width: '45px',
        height: '45px',
        backgroundColor: 'white',
      }}
      onClick={playAudio}
    >
      {playing ? <Stop fontSize="large" /> : <PlayArrow fontSize="large" />}
    </Fab>
  );
};

export default memo(SoundBtn);
