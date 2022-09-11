import { Stack, CircularProgress } from '@mui/material';

const StatisticsProgress = () => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        pt: '200px',
      }}
    >
      <CircularProgress color="info" size={60} />
    </Stack>
  );
};

export default StatisticsProgress;
