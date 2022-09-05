import { Fragment, SetStateAction } from 'react';
import { LoadingButton } from '@mui/lab';
import { Typography, Box } from '@mui/material';
import { textStyle } from '../lib/styles';

type IControlPanel = {
  isLogin: boolean;
  isLoading: boolean;
  setLogin: (value: SetStateAction<boolean>) => void;
};

const ControlPanel = (props: IControlPanel) => {
  const { isLogin, isLoading, setLogin } = props;

  return (
    <Fragment>
      <LoadingButton
        color="primary"
        variant="contained"
        type="submit"
        loading={isLoading}
        sx={{ fontSize: 16, color: '#edefed' }}
      >
        {isLogin ? 'Войти' : 'Зарегистрироваться'}
      </LoadingButton>
      <Typography variant="body1" color="text.secondary">
        {!isLogin && 'Есть аккаунт?'}
        <Box component="span" onClick={() => setLogin((state) => !state)} sx={textStyle}>
          {isLogin ? 'Зарегистрироваться' : 'Войти'}
        </Box>
      </Typography>
    </Fragment>
  );
};

export default ControlPanel;
