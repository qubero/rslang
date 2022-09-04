import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  IUser,
  IUserResponse,
  IWord,
  IWordsQuery,
  IToken,
  IStatisticRequest,
  IStatistic,
} from '../lib/types';
import { getAuthHeaders } from '../lib/util';
import { API_URL, API_PATH, TAG } from './constants';

const { WORDS, USERS, TOKENS, SIGNING, STATISTICS } = API_PATH;

export const learnWordsAPI = createApi({
  reducerPath: 'learnWordsAPI',
  tagTypes: [TAG.WORDS, TAG.STATISTICS],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getWords: build.query<IWord[], IWordsQuery>({ query: (params) => ({ url: WORDS, params }) }),
    updateToken: build.mutation<IUserResponse, IToken>({
      query: ({ id, token }) => ({
        url: TOKENS(id),
        headers: getAuthHeaders(token),
        method: 'GET',
      }),
    }),
    getUser: build.mutation<IUserResponse, IUser>({
      query: (body) => ({ url: SIGNING, headers: getAuthHeaders(), method: 'POST', body }),
    }),
    addUser: build.mutation<IUser, IUser>({
      query: (body) => ({ url: USERS, headers: getAuthHeaders(), method: 'POST', body }),
    }),
    getStatistics: build.query<IStatistic, IStatisticRequest>({
      query: ({ id, token }) => ({ url: STATISTICS(id), headers: getAuthHeaders(token) }),
      providesTags: [TAG.STATISTICS],
    }),
    updateStatistics: build.mutation<IStatistic, IStatisticRequest>({
      query: ({ id, token, body }) => ({
        url: STATISTICS(id),
        headers: getAuthHeaders(token),
        method: 'PUT',
        body,
      }),
      invalidatesTags: [TAG.STATISTICS],
    }),
  }),
});
