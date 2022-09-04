import { learnWordsAPI } from './model/learnWordsApi';
import { userWordsApi } from './model/userWordsApi';

export { learnWordsAPI, userWordsApi };

export const {
  useGetWordsQuery,
  useGetUserMutation,
  useAddUserMutation,
  useUpdateTokenMutation,
  useGetStatisticsQuery,
  useUpdateStatisticsMutation,
} = learnWordsAPI;

export const {
  useGetAggregatedWordsQuery,
  useGetAggregatedWordQuery,
  useGetUserWordsQuery,
  useGetUserWordQuery,
  useCreateUserWordMutation,
  useDeleteUserWordMutation,
  useUpdateUserWordMutation,
} = userWordsApi;
