import { memo } from 'react';
import { Stack, Typography } from '@mui/material';

import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import { themeColor } from 'widgets/BookHeader/lib/styles';
import { useQueryParams } from 'widgets/BookHeader/model/hooks/useQuery';
import { SettingsBtn, SoundBtn } from 'widgets/BookBtns';
import { IWord } from 'shared/api/lib/types';

type IWordHeader = {
  item: IWord;
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
};

const WordHeader = ({ item, userId, setUserId }: IWordHeader) => {
  const { isAuth } = useAuth();
  const { group } = useQueryParams();

  return (
    <Stack sx={{ borderLeft: `3px solid #${themeColor[Number(group)]}`, pl: 2 }}>
      <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center', position: 'relative' }}>
        <Typography variant="h6" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
          {item.word}
        </Typography>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: '400' }}>
          {item.transcription}
        </Typography>
        {isAuth && <SettingsBtn item={item} />}
        <SoundBtn
          id={item.id}
          userId={userId}
          setUserId={setUserId}
          srcAudio={item.audio}
          srcMeaning={item.audioMeaning}
          srcExample={item.audioExample}
        />
      </Stack>
      <Typography variant="body1" color="text.secondary">
        {item.wordTranslate}
      </Typography>
    </Stack>
  );
};

export default memo(WordHeader);
