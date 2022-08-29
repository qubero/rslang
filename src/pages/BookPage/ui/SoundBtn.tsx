import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { Howl } from 'howler';
import { PlayArrow, Stop } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { API_URL } from 'shared/api/model/constants';
import { themeColor } from '../lib/styles';

type SoundBtnProps = {
  group: string;
  id: string;
  userId: string;
  srcAudio: string;
  srcMeaning: string;
  srcExample: string;
  setUserId: Dispatch<SetStateAction<string>>;
};

const SoundBtn = (props: SoundBtnProps) => {
  const { srcAudio, srcMeaning, srcExample, setUserId, id, userId, group } = props;
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
    <IconButton sx={{ color: `#${themeColor[Number(group)]}`, p: '2px' }} onClick={playAudio}>
      {playing ? <Stop fontSize="large" /> : <PlayArrow fontSize="large" />}
    </IconButton>
  );
};

export default SoundBtn;
