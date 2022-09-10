import { IMuiColor } from './types';

const themeColor = ['2e7d32', '2e7d32', 'ed6c02', 'ed6c02', 'd32f2f', 'd32f2f', '0288d1'];
const muiColor: IMuiColor[] = [
  'success',
  'success',
  'warning',
  'warning',
  'error',
  'error',
  'info',
];
const btnCardStyle = (i: number) => ({
  width: '100%',
  flexGrow: 1,
  height: '65px',
  justifyContent: i > 5 ? 'center' : 'space-between',
});

export { themeColor, muiColor, btnCardStyle };
