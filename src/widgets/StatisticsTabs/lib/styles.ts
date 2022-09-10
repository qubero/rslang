import { Paper, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  height: 180,
  lineHeight: '60px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

export { Item };
