import { Box, Alert, AlertTitle } from '@mui/material';

const AuthNotification = () => {
  return (
    <Box sx={{ width: '99.5%', pl: 1 }}>
      <Alert severity="info" sx={{ width: '100%' }}>
        <AlertTitle>Страница недоступна</AlertTitle>
        Извините данная страница для зарегистрированных пользователей —
        <strong> Войдите под своей учетной записью!</strong>
      </Alert>
    </Box>
  );
};

export default AuthNotification;
