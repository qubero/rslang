import { Howl } from 'howler';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { IWord } from 'shared/api/lib/types';
import { API_URL } from 'shared/api/model/constants';
import { useAppDispatch } from 'shared/store/model/hooks';
import { setLoading } from 'shared/store/slices/bookSlice';
import { ISoundBtnProps } from 'widgets/BookBtns/lib/types';
import { useQueryParams } from 'widgets/BookHeader/model/hooks/useQuery';
import { useUserWord } from 'widgets/UserWords';

const useSoundBtn = (props: ISoundBtnProps) => {
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
  return { playAudio, group, playing };
};

const useSettingsBtn = (item: IWord) => {
  const { id, userWord } = item;
  const { group } = useQueryParams();
  const dispatch = useAppDispatch();
  const { markAsLearned, markAsDifficult, handleDelete } = useUserWord(id);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const hardFabProps = {
    disabled: userWord?.difficulty === 'hard' && group !== '6' && true,
    onClick: () => {
      if (group === '6') handleDelete();
      else markAsDifficult();
      dispatch(setLoading(false));
      handleClose();
    },
  };
  const learnFabProps = {
    disabled: userWord?.optional.isLearned,
    onClick: () => {
      markAsLearned();
      dispatch(setLoading(false));
      handleClose();
    },
  };
  return { hardFabProps, learnFabProps, handleOpen, handleClose, userWord, group, open };
};

export { useSettingsBtn, useSoundBtn };
