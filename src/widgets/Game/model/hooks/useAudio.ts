import { Howl } from 'howler';
import { useMemo } from 'react';

import successAudioSrc from '../../lib/correct-answer.mp3';
import wrongAudioSrc from '../../lib/wrong-answer.mp3';

const useAudio = () => {
  const audioOnSuccess = useMemo(() => new Howl({ src: [successAudioSrc] }), []);
  const audioOnFail = useMemo(() => new Howl({ src: [wrongAudioSrc] }), []);

  return {
    audioOnSuccess,
    audioOnFail,
  };
};

export default useAudio;
