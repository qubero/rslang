import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IUser, IUserResponse, IWord, IWordsQuery, IToken } from './lib/types';
import { isAuthHeader } from './lib/util';
import { API_URL, API_PATH } from './model/constants';

const { WORDS, USERS, TOKENS, SIGNING } = API_PATH;
export const learnWordsAPI = createApi({
  reducerPath: 'learnWordsAPI',
  tagTypes: [WORDS],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getWords: build.query<IWord[], IWordsQuery>({ query: (params) => ({ url: WORDS, params }) }),
    updateToken: build.mutation<IUserResponse, IToken>({
      query: ({ id, token }) => ({ url: TOKENS(id), headers: isAuthHeader(token), method: 'GET' }),
    }),
    getUser: build.mutation<IUserResponse, IUser>({
      query: (body) => ({ url: SIGNING, headers: isAuthHeader(), method: 'POST', body }),
    }),
    addUser: build.mutation<IUser, IUser>({
      query: (body) => ({ url: USERS, headers: isAuthHeader(), method: 'POST', body }),
    }),
  }),
});

export const { useGetWordsQuery, useGetUserMutation, useAddUserMutation, useUpdateTokenMutation } =
  learnWordsAPI;
