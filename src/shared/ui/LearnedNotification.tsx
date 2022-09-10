import { Box, Alert, AlertTitle } from '@mui/material';

const LearnedNotification = () => {
  return (
    <Box sx={{ width: '99.5%', pl: 1 }}>
      <Alert severity="success" sx={{ width: '100%' }}>
        <AlertTitle>Страница полностью изучена</AlertTitle>
        Все слова на странице относятся к изученным словам или сложным словам —
        <strong> Ура!</strong>
      </Alert>
    </Box>
  );
};

export default LearnedNotification;
