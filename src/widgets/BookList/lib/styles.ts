import { IWord } from 'shared/api/lib/types';

const cardWordStyle = (item: IWord) => ({
  maxWidth: { md: 1000, xl: 700 },
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  background: (item.userWord?.difficulty === 'hard' && '#d32f2f46') || 'inherit',
  boxShadow: item.userWord?.optional.isLearned
    ? 'inset 0px 0px 0px 3px #2e7d32'
    : '0px 2px 1px -1px #00000033, 0px 1px 1px 0px #00000024, 0px 1px 3px 0px #0000001f',
});

export { cardWordStyle };
