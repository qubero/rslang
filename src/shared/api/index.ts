import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IUser, IWord, IWordsQuery } from './lib/types';
import { API_URL, HEADERS } from './lib/constants';

export const learnWordsAPI = createApi({
  reducerPath: 'learnWordsAPI',
  tagTypes: ['user'],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getWords: build.query<IWord[], IWordsQuery>({
      query: ({ page, group }) => `words?page=${page}&group=${group}`,
    }),
    addUser: build.mutation<IUser, IUser>({
      query: (body) => ({ url: 'users', headers: HEADERS, method: 'POST', body }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const { useGetWordsQuery, useAddUserMutation } = learnWordsAPI;
