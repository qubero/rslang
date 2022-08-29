import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { learnWordsAPI, userWordsApi } from '../api';

const rootReducer = combineReducers({
  [learnWordsAPI.reducerPath]: learnWordsAPI.reducer,
  [userWordsApi.reducerPath]: userWordsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(learnWordsAPI.middleware).concat(userWordsApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
