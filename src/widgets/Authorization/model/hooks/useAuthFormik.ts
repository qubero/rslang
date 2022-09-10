import { Dispatch, SetStateAction, useState } from 'react';
import { useFormik } from 'formik';

import { useAddUserMutation, useGetUserMutation, useUpdateStatisticsMutation } from 'shared/api';
import { IUserResponse } from 'shared/api/lib/types';
import { schemaForLogin, schemaForRegistration } from 'widgets/Authorization/lib/util';
import { INITIAL_STATISTICS } from 'shared/constants';

const useAuthFormik = (
  handlerClose: () => void,
  setUserAuth: Dispatch<SetStateAction<IUserResponse | null>>
) => {
  const [isLogin, setLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [createUser] = useAddUserMutation();
  const [getUser] = useGetUserMutation();
  const [initialStatistics] = useUpdateStatisticsMutation();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: !isLogin ? schemaForRegistration : schemaForLogin,
    onSubmit: async ({ name, email, password }, { setErrors }) => {
      try {
        setLoading(true);
        if (!isLogin) await createUser({ name, email, password }).unwrap();
        const user = await getUser({ email, password }).unwrap();
        const initial = { id: user.userId, token: user.token, body: INITIAL_STATISTICS };
        if (!isLogin) await initialStatistics(initial).unwrap();
        setUserAuth(user);
        handlerClose();
        setTimeout(() => window.location.reload(), 200);
      } catch (error) {
        setErrors({ password: isLogin ? 'Неверный email или пароль' : 'Этот email уже занят' });
      } finally {
        setLoading(false);
      }
    },
  });

  return { formik, isLogin, isLoading, setLogin };
};

export { useAuthFormik };
