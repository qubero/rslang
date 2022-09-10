import { memo } from 'react';
import { PlayArrow, Stop } from '@mui/icons-material';
import { Fab } from '@mui/material';
import { soundBtnStyle } from '../lib/styles';
import { ISoundBtnProps } from '../lib/types';
import { useSoundBtn } from '../model/hooks';

const SoundBtn = (props: ISoundBtnProps) => {
  const { playAudio, group, playing } = useSoundBtn(props);

  return (
    <Fab sx={soundBtnStyle(group)} onClick={playAudio}>
      {playing ? <Stop fontSize="large" /> : <PlayArrow fontSize="large" />}
    </Fab>
  );
};

export default memo(SoundBtn);
