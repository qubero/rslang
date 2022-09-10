import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { learnWordsAPI, userWordsApi } from '../api';
import bookSlice from './slices/bookSlice';

const rootReducer = combineReducers({
  [learnWordsAPI.reducerPath]: learnWordsAPI.reducer,
  [userWordsApi.reducerPath]: userWordsApi.reducer,
  bookSlice: bookSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(learnWordsAPI.middleware).concat(userWordsApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
