import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  IAggregatedWordsRequest,
  IAggregatedWordsResponse,
  IToken,
  IUserWord,
  IUserWordRequest,
  IWord,
} from '../lib/types';
import { getAuthHeaders } from '../lib/util';
import { API_PATH, API_URL, TAG } from './constants';

export const userWordsApi = createApi({
  reducerPath: 'userWordsAPI',
  tagTypes: [TAG.USER_WORDS, TAG.USER_WORD, TAG.AGGREGATED_WORD, TAG.AGGREGATED_WORDS],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getAggregatedWords: build.query<IAggregatedWordsResponse[], IAggregatedWordsRequest>({
      query: ({ auth: { id, token }, params }) => ({
        url: API_PATH.AGGREGATED_WORDS(id),
        headers: getAuthHeaders(token),
        params,
      }),
      providesTags: [TAG.AGGREGATED_WORDS],
    }),
    getAggregatedWord: build.query<IWord, IUserWordRequest>({
      query: ({ auth: { id, token }, wordId }) => ({
        url: API_PATH.AGGREGATED_WORD(id, wordId),
        headers: getAuthHeaders(token),
      }),
      providesTags: [TAG.AGGREGATED_WORD],
    }),
    getUserWords: build.query<IUserWord[], IToken>({
      query: ({ id, token }) => ({
        url: API_PATH.USER_WORDS(id),
        headers: getAuthHeaders(token),
      }),
      providesTags: [TAG.USER_WORDS],
    }),
    getUserWord: build.query<IUserWord, IUserWordRequest>({
      query: ({ auth: { id, token }, wordId }) => ({
        url: API_PATH.USER_WORD(id, wordId),
        headers: getAuthHeaders(token),
      }),
      providesTags: [TAG.USER_WORD],
    }),
    createUserWord: build.mutation<IUserWord, IUserWordRequest>({
      query: ({ auth: { id, token }, wordId, body }) => ({
        url: API_PATH.USER_WORD(id, wordId),
        headers: getAuthHeaders(token),
        method: 'POST',
        body,
      }),
      invalidatesTags: [TAG.USER_WORDS, TAG.USER_WORD, TAG.AGGREGATED_WORDS],
    }),
    updateUserWord: build.mutation<IUserWord, IUserWordRequest>({
      query: ({ auth: { id, token }, wordId, body }) => ({
        url: API_PATH.USER_WORD(id, wordId),
        headers: getAuthHeaders(token),
        method: 'PUT',
        body,
      }),
      invalidatesTags: [TAG.USER_WORDS, TAG.USER_WORD, TAG.AGGREGATED_WORDS],
    }),
    deleteUserWord: build.mutation<Record<string, never>, IUserWordRequest>({
      query: ({ auth: { id, token }, wordId }) => ({
        url: API_PATH.USER_WORD(id, wordId),
        headers: getAuthHeaders(token),
        method: 'DELETE',
      }),
      invalidatesTags: [TAG.USER_WORDS, TAG.USER_WORD, TAG.AGGREGATED_WORDS],
    }),
  }),
});
