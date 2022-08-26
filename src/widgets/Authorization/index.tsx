import { Dispatch, SetStateAction } from 'react';
import { TextField, Stack, Typography } from '@mui/material';

import { IUserResponse } from 'shared/api/lib/types';
import { useCustomFormik } from './model/hooks';
import ControlPanel from './ui/ControlPanel';

type AuthorizationProps = {
  handlerClose: () => void;
  setUserAuth: Dispatch<SetStateAction<IUserResponse | null>>;
};

const Authorization = (props: AuthorizationProps) => {
  const { handlerClose, setUserAuth } = props;
  const { formik, isLogin, isLoading, setLogin } = useCustomFormik(handlerClose, setUserAuth);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={3}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          {isLogin ? 'Вход в аккаунт' : 'Регистрация'}
        </Typography>
        {!isLogin && (
          <TextField
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        )}
        <TextField
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="on"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <ControlPanel isLogin={isLogin} isLoading={isLoading} setLogin={setLogin} />
      </Stack>
    </form>
  );
};

export default Authorization;
