import { useState } from 'react';
import { IUserResponse } from 'shared/api/lib/types';
import { useLocalStorage } from 'widgets/AppBar/model/hooks';

const useAuth = () => {
  const [userAuth] = useLocalStorage<IUserResponse | null>(null, 'Team30-UserAuth');
  const { userId, token } = userAuth || { userId: '', token: '' };

  const auth = { id: userId, token };
  const [isAuth] = useState(Boolean(userId && token));

  return {
    isAuth,
    auth,
  };
};

export default useAuth;
