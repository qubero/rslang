import { useState } from 'react';
import { IUserResponse } from 'shared/api/lib/types';
import { STORAGE_AUTH_USER } from 'shared/constants';
import { useLocalStorage } from 'widgets/AppBar/model/hooks';

const useAuth = () => {
  const [userAuth] = useLocalStorage<IUserResponse | null>(null, STORAGE_AUTH_USER);
  const { userId, token } = userAuth || { userId: '', token: '' };

  const auth = { id: userId, token };
  const [isAuth] = useState(Boolean(userId && token));

  return {
    isAuth,
    auth,
  };
};

export default useAuth;
