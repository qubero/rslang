import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type BookState = { loading: boolean; learned: boolean };

const initialState: BookState = { loading: true, learned: false };
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    },
    setLearning(state, { payload }: PayloadAction<boolean>) {
      state.learned = payload;
    },
  },
});

export const { setLoading, setLearning } = bookSlice.actions;
export default bookSlice;
