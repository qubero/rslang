import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useUpdateTokenMutation } from 'shared/api';
import { IUserResponse } from 'shared/api/lib/types';
import { STORAGE_AUTH_USER } from 'shared/constants';

const useLocalStorage = <T>(initialValue: T, key: string): [T, Dispatch<SetStateAction<T>>] => {
  const getValue = (): T => {
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(storage) : initialValue;
  };
  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

const useRefreshToken = (
  userAuth: IUserResponse | null,
  setUserAuth: Dispatch<SetStateAction<IUserResponse | null>>
) => {
  const [updateToken] = useUpdateTokenMutation();
  const getToken = async (id: string, refreshToken: string) => {
    try {
      const authData = await updateToken({ id, token: refreshToken }).unwrap();
      setUserAuth((state) => ({ ...state, ...authData }));
    } catch (e) {
      localStorage.setItem(STORAGE_AUTH_USER, 'null');
    }
  };

  useEffect(() => {
    if (userAuth) getToken(userAuth.userId, userAuth.refreshToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export { useLocalStorage, useRefreshToken };
