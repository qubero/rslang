import { Stack, CircularProgress } from '@mui/material';

const styleProgress = { height: '25vw', justifyContent: 'center', alignItems: 'center' };

const ProgressBar = () => {
  return (
    <Stack sx={styleProgress}>
      <CircularProgress color="info" size={60} />
    </Stack>
  );
};

export default ProgressBar;
