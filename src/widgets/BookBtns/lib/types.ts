import { Dispatch, SetStateAction } from 'react';
import { IWord } from 'shared/api/lib/types';

interface ISoundBtnProps {
  id: string;
  userId: string;
  srcAudio: string;
  srcMeaning: string;
  srcExample: string;
  setUserId: Dispatch<SetStateAction<string>>;
}

interface ISettingsBtn {
  item: IWord;
}

export type { ISoundBtnProps, ISettingsBtn };
