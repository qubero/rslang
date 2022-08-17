import { configureStore } from '@reduxjs/toolkit';
import { learnWordsAPI } from '../api';

export const store = configureStore({
  reducer: {
    [learnWordsAPI.reducerPath]: learnWordsAPI.reducer
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(learnWordsAPI.middleware)
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
