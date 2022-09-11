import { IWord } from 'shared/api/lib/types';

const cardWordStyle = (item: IWord) => ({
  maxWidth: { xs: '100%', md: 1000, xl: 700 },
  display: 'grid',
  gridTemplateColumns: { xs: 'minmax(200px, 500px)', md: '250px 1fr', xl: '200px 1fr' },
  gridTemplateRows: { xs: '300px 1fr', md: 'minmax(310px, 325px)' },
  flexGrow: 1,
  background: (item.userWord?.difficulty === 'hard' && '#d32f2f46') || 'inherit',
  boxShadow: item.userWord?.optional.isLearned
    ? 'inset 0px 0px 0px 3px #2e7d32'
    : '0px 2px 1px -1px #00000033, 0px 1px 1px 0px #00000024, 0px 1px 3px 0px #0000001f',
});

export { cardWordStyle };
